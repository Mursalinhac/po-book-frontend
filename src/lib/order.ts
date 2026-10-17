import type { OrderData } from '../types/components';
import type { FactoryOption, FactoryOptionGroup, DealerOptionGroup } from '../types/api';

type OptionGroup = FactoryOptionGroup | DealerOptionGroup;

/** IDs identify catalog rows; manufacturer codes may be absent or repeated. */
export function optionId(group: OptionGroup, option: FactoryOption): string {
  return option.id || `${group.key}-${group.options.indexOf(option)}`;
}

export function selectedOptions(group: OptionGroup): FactoryOption[] {
  if (!group.selected) return [];
  if (group.selectType === 'single') {
    return 'title' in group.selected ? [group.selected as FactoryOption] : [];
  }
  return Object.values(group.selected) as FactoryOption[];
}

/** Preserve catalog baseline and existing tax semantics; only replace this group's contribution. */
export function updateOptionSelection(
  order: OrderData,
  parentKey: 'factoryInstalled' | 'dealerInstalled',
  group: OptionGroup,
  option: FactoryOption,
  checked: boolean,
): OrderData {
  const currentGroup = order[parentKey]?.[group.key] || group;
  const id = optionId(group, option);
  const previousSelections = selectedOptions(currentGroup);
  let selected: OptionGroup['selected'];
  if (group.selectType === 'multi') {
    const choices = { ...(currentGroup.selected as Record<string, FactoryOption> || {}) };
    if (checked) choices[id] = option;
    else delete choices[id];
    selected = choices;
  } else {
    selected = checked ? option : {};
  }
  const nextGroup = { ...currentGroup, ...group, selected };
  const sum = (options: FactoryOption[]) => options.reduce((total, item) => total + (Number(item.price) || 0), 0);
  const subTotal = Math.round(((order.price?.subTotal || 0) + sum(selectedOptions(nextGroup)) - sum(previousSelections)) * 100) / 100;
  const tax = Math.round(subTotal * (order.price?.taxPercentage || 0)) / 100;
  return {
    ...order,
    [parentKey]: { ...order[parentKey], [group.key]: nextGroup },
    price: { ...order.price, subTotal, tax, total: Math.round((subTotal + tax) * 100) / 100 },
  };
}

type Groups = Record<string, OptionGroup> | undefined;

/** Sum of selected option prices across groups, optionally skipping one group (e.g. the trim). */
export function selectedTotal(groups: Groups, skipKey?: string): number {
  return Object.values(groups || {})
    .filter((group) => group.key !== skipKey)
    .flatMap(selectedOptions)
    .reduce((total, option) => total + (Number(option.price) || 0), 0);
}

export function selectedCount(groups: Groups, skipKey?: string): number {
  return Object.values(groups || {}).filter((group) => group.key !== skipKey).flatMap(selectedOptions).length;
}

export type StepId = 'trim' | 'factory' | 'dealer' | 'customer' | 'trade' | 'review';
export interface StepStatus {
  id: StepId;
  label: string;
  /** done: complete; todo: required work left; optional: may be skipped. */
  state: 'done' | 'todo' | 'optional';
  summary: string;
  missing: string[];
}

const customerFields: [keyof NonNullable<OrderData['customerInfo']>, string][] = [
  ['firstName', 'Customer name'], ['stock', 'Stock number'], ['salesperson', 'Salesperson'],
  ['address1', 'Street address'], ['city', 'City'], ['state', 'State'], ['zipcode', 'Postal code'],
  ['number', 'Phone'], ['email', 'Email'],
];

const plural = (count: number, one: string, many = `${one}s`) => `${count} ${count === 1 ? one : many}`;

/** Per-step completeness for the step rail and the review checklist. */
export function orderSteps(order: OrderData): StepStatus[] {
  const trim = order.factoryInstalled?.model ? selectedOptions(order.factoryInstalled.model)[0] : undefined;
  const factory = selectedCount(order.factoryInstalled, 'model');
  const dealer = selectedCount(order.dealerInstalled);
  const customer = order.customerInfo || {};
  const missingCustomer = customerFields.filter(([key]) => !String(customer[key] ?? '').trim()).map(([, label]) => label);
  const trade = order.tradeInfo;
  const hasTrade = Boolean(trade && (trade.make || trade.model || trade.vin));
  const steps: StepStatus[] = [
    { id: 'trim', label: 'Model & trim', state: trim ? 'done' : 'todo', summary: trim?.title || 'Not chosen', missing: trim ? [] : ['Model trim'] },
    { id: 'factory', label: 'Factory options', state: factory ? 'done' : 'optional', summary: factory ? plural(factory, 'option') : 'None added', missing: [] },
    { id: 'dealer', label: 'Dealer accessories', state: dealer ? 'done' : 'optional', summary: dealer ? plural(dealer, 'accessory', 'accessories') : 'None added', missing: [] },
    { id: 'customer', label: 'Customer', state: missingCustomer.length ? 'todo' : 'done', summary: customer.firstName?.trim() || (missingCustomer.length === customerFields.length ? 'Not entered' : `${missingCustomer.length} missing`), missing: missingCustomer },
    { id: 'trade', label: 'Trade-in', state: hasTrade ? 'done' : 'optional', summary: hasTrade ? [trade?.year, trade?.make, trade?.model].filter(Boolean).join(' ') : 'No trade-in', missing: [] },
  ];
  const outstanding = steps.flatMap((step) => step.missing);
  steps.push({ id: 'review', label: 'Review & print', state: outstanding.length ? 'todo' : 'done', summary: outstanding.length ? `${outstanding.length} to complete` : 'Ready to print', missing: outstanding });
  return steps;
}

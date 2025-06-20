// API Response Types for Corvette Purchase Order Application

export interface PriceListResponse {
  factoryInstalled: Record<string, FactoryOptionGroup>;
  dealerInstalled: Record<string, DealerOptionGroup>;
  basePrice: number;
  model: string;
  price?: PriceStructure;
}

export interface FactoryOptionGroup {
  key: string;
  title: string;
  selectType: 'single' | 'multi';
  options: FactoryOption[];
  selected?: any;
}

export interface FactoryOption {
  code: string;
  title: string;
  price: number;
  selected?: boolean;
}

export interface DealerOptionGroup {
  key: string;
  title: string;
  selectType: 'single' | 'multi';
  options: DealerOption[];
  selected?: any;
}

export interface DealerOption {
  code: string;
  title: string;
  price: number;
  selected?: boolean;
}

export interface PriceStructure {
  basePrice?: number;
  additionalEquipment?: number;
  freightCharge?: number;
  floorPlan?: number;
  msrp?: number;
  msrpTotal?: number;
  subTotal?: number;
  taxPercentage?: number;
  tax?: number;
  salesTax?: number;
  gasGuzzler?: number;
  total?: number;
  grandTotal?: number;
  dealerAddedOptions?: number;
  adjustedVehiclePrice?: number;
  tradeInAllowance?: number;
  documentaryFee?: number;
  taxableAmount?: number;
  deposit?: number;
  balanceDue?: number;
  optionCodes?: OptionCode[];
}

export interface OptionCode {
  code: string;
  description: string;
  price: string | number;
}

// Health check response
export interface HealthCheckResponse {
  status: string;
  timestamp: string;
}

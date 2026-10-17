// Component Props and Data Types for Corvette Purchase Order Application

import { FactoryOptionGroup, DealerOptionGroup, PriceStructure } from './api';

// Navigation Component
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface NavigationProps {}

// Home Component
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface HomeProps {}

// Order Component
export interface OrderProps {
    model?: string;
}

// Customer Information
export interface CustomerInfoProps {
  onChange: (updater: (prevState: OrderData) => OrderData) => void;
}

export interface CustomerData {
  firstName?: string;
  fullName?: string;
  stock?: string;
  salesperson?: string;
  address1?: string;
  address2?: string;
  address?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  zipCode?: string;
  number?: string;
  phone?: string;
  email?: string;
  year?: string;
  make?: string;
  model?: string;
  bodyType?: string;
  bodytype?: string;
  exteriorColor?: string;
  color?: string;
  interiorColor?: string;
  trim?: string;
  top?: string;
  miles?: number;
  vin?: string;
  orderDate?: string;
}

// Trade Information
export interface TradeInfoProps {
  order?: OrderData;
  setOrder?: (updater: (prevState: OrderData) => OrderData) => void;
  onChange?: (updater: (prevState: OrderData) => OrderData) => void;
}

export interface TradeData {
  year?: number;
  make?: string;
  model?: string;
  bodyType?: string;
  exteriorColor?: string;
  interiorColor?: string;
  trim?: string;
  mileage?: number;
  vin?: string;
  tradeValue?: number;
  balanceOwed?: number;
  netTrade?: number;
  lienHolder?: string;
  accountNumber?: string;
  infoFrom?: string;
  goodWill?: string;
}

// Factory and Dealer Installed Options
export interface FactoryInstalledProps {
  options: Record<string, FactoryOptionGroup>;
  onChange: (updater: (prevState: OrderData) => OrderData) => void;
}

export interface DealerInstalledProps {
  options: Record<string, DealerOptionGroup>;
  onChange: (updater: (prevState: OrderData) => OrderData) => void;
}

// Order Option Component
export interface OrderOptionProps {
  orderOption: FactoryOptionGroup | DealerOptionGroup;
  onChange: (updater: (prevState: OrderData) => OrderData) => void;
  parentKey: 'factoryInstalled' | 'dealerInstalled';
}

// Preview Components
export interface PreviewProps {
  order: OrderData;
  setOrder: (updater: (prevState: OrderData) => OrderData) => void;
  onEdit?: (step: import('../lib/order').StepId) => void;
}

export interface PricePreviewProps {
  price?: PriceStructure;
  setOrder?: (updater: (prevState: OrderData) => OrderData) => void;
}

export interface CustomerInfoPreviewProps {
  customerInfo?: CustomerData;
}

export interface InstallationPreviewProps {
  options?: Record<string, FactoryOptionGroup | DealerOptionGroup>;
  title: string;
}

// Print Components
export interface PrintComponentProps {
  order: OrderData;
}

export interface PrintPreviewProps {
  order: OrderData;
}

// Main Order Data Structure
export interface OrderData {
  total?: number;
  model?: string;
  customerInfo?: CustomerData;
  tradeInfo?: TradeData;
  factoryInstalled?: Record<string, FactoryOptionGroup>;
  dealerInstalled?: Record<string, DealerOptionGroup>;
  price?: PriceStructure;
  [key: string]: unknown; // For dynamic option properties
}

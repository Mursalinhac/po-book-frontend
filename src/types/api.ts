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
  selected?: FactoryOption | Record<string, FactoryOption>;
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
  selected?: DealerOption | Record<string, DealerOption>;
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

// API Response Types
export interface CreateOrderResponse {
  id: string;
  status: string;
  message?: string;
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}

export interface GetCustomersResponse {
  customers: Customer[];
  total: number;
}

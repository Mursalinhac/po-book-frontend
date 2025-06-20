// Common Types and Utilities for Corvette Purchase Order Application

// Vehicle Models
export type VehicleModel = 'stingray' | 'z06' | 'zr1' | 'e-ray';

// Form Event Types
export interface FormChangeEvent {
  target: {
    name: string;
    value: string | number;
  };
}

// Option Selection Types
export type SelectionType = 'single' | 'multi';

// Tab Keys for Order Form
export type OrderTabKey = 'customerInfo' | 'trade-in' | 'factoryInstaller' | 'dealerInstaller' | 'preview';

// Error Types
export interface AppError {
  message: string;
  code?: string;
  details?: Record<string, unknown>;
}

// Loading States
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

// Generic API Response Wrapper
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// Utility Types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;

// Event Handler Types
export type ChangeHandler = (event: FormChangeEvent) => void;
export type StateUpdater<T> = (updater: (prevState: T) => T) => void;

// Print-related Types
export interface PrintSettings {
  orientation?: 'portrait' | 'landscape';
  paperSize?: 'A4' | 'letter';
  margins?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

// Route Parameters
export interface RouteParams {
  model?: VehicleModel;
}

// Environment Configuration
export interface AppConfig {
  apiBaseUrl: string;
  environment: 'development' | 'production' | 'test';
  version: string;
}

// API Client for Corvette Purchase Order Application
// Next.js implementation using fetch instead of Axios

import { PriceListResponse, HealthCheckResponse, CreateOrderResponse, GetCustomersResponse } from '../types/api';
import { OrderData } from '../types/components';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

export class ApiClient {
  private baseURL: string;

  constructor() {
    this.baseURL = API_BASE_URL.replace(/\/$/, '');
  }

  /**
   * Fetch price list data for a specific vehicle model
   * @param model - Vehicle model (e.g., 'stingray', 'z06', 'zr1', 'eray')
   * @returns Promise<PriceListResponse>
   */
  async getPriceList(model: string): Promise<PriceListResponse> {
    const response = await fetch(`${this.baseURL}/pricelist/${encodeURIComponent(model)}`, {
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) {
      const error = await response.json().catch(() => null);
      throw new Error(error?.error || error?.message || `Unable to load price list (${response.status})`);
    }
    const data = await response.json();
    if (!data || !data.factoryInstalled || !data.dealerInstalled || !data.price ||
        typeof data.price.subTotal !== 'number' || typeof data.price.taxPercentage !== 'number') {
      throw new Error('Invalid price list received from server');
    }
    const normalizeGroups = (groups: PriceListResponse['factoryInstalled']) =>
      Object.fromEntries(Object.entries(groups).map(([key, group]) => {
        if (!group || !Array.isArray(group.options)) throw new Error('Invalid price list options');
        return [key, {
          ...group,
          key,
          options: group.options.map((option, index) => ({
            ...option,
            id: `${key}-${index}`,
            code: String(option.code ?? ''),
          })),
        }];
      }));
    return {
      ...data,
      factoryInstalled: normalizeGroups(data.factoryInstalled),
      dealerInstalled: normalizeGroups(data.dealerInstalled),
      basePrice: data.basePrice || 0,
      model: data.model || model,
    };
  }

  /**
   * Health check endpoint
   * @returns Promise<HealthCheckResponse>
   */
  async healthCheck(): Promise<HealthCheckResponse> {
    try {
      const response = await fetch(`${this.baseURL}/health`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error checking health:', error);
      throw error;
    }
  }

  /**
   * Create a new order (if endpoint exists)
   * @param orderData - Order data to submit
   * @returns Promise<CreateOrderResponse>
   */
  async createOrder(orderData: OrderData): Promise<CreateOrderResponse> {
    try {
      const response = await fetch(`${this.baseURL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  }

  /**
   * Get customer list (if endpoint exists)
   * @returns Promise<GetCustomersResponse>
   */
  async getCustomers(): Promise<GetCustomersResponse> {
    try {
      const response = await fetch(`${this.baseURL}/customers`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching customers:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Export configuration for debugging
export const config = {
  apiUrl: API_BASE_URL,
  isDevelopment: process.env.NODE_ENV === 'development',
};

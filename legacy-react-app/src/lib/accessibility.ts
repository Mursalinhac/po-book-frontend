// Accessibility utilities and constants

export const ARIA_LABELS = {
  // Form sections
  customerInfoForm: "Customer information form",
  tradeInfoForm: "Trade-in vehicle information form",
  
  // Navigation
  mainNavigation: "Main navigation",
  tabNavigation: "Order form sections",
  
  // Form fields with descriptions
  customerName: {
    label: "Customer full name",
    description: "Enter the customer's complete name as it appears on identification"
  },
  stock: {
    label: "Vehicle stock number",
    description: "Enter the dealership stock number for this vehicle"
  },
  salesperson: {
    label: "Salesperson name",
    description: "Enter the name of the salesperson handling this order"
  },
  address: {
    label: "Customer street address",
    description: "Enter the customer's street address including apartment or unit number"
  },
  city: {
    label: "Customer city",
    description: "Enter the city where the customer resides"
  },
  state: {
    label: "Customer state or province",
    description: "Enter the state or province where the customer resides"
  },
  zipcode: {
    label: "Customer postal code",
    description: "Enter the 5-digit ZIP code or ZIP+4 format (12345 or 12345-6789)"
  },
  phone: {
    label: "Customer mobile phone number",
    description: "Enter the customer's mobile phone number (10 digits, numbers only)"
  },
  email: {
    label: "Customer email address",
    description: "Enter a valid email address for order communications"
  },
  
  // Trade-in fields
  tradeYear: {
    label: "Trade-in vehicle year",
    description: "Enter the model year of the trade-in vehicle (4 digits)"
  },
  tradeMake: {
    label: "Trade-in vehicle make",
    description: "Enter the manufacturer of the trade-in vehicle (e.g., Chevrolet, Ford)"
  },
  tradeModel: {
    label: "Trade-in vehicle model",
    description: "Enter the specific model of the trade-in vehicle"
  },
  tradeColor: {
    label: "Trade-in vehicle color",
    description: "Enter the exterior color of the trade-in vehicle"
  },
  tradeVin: {
    label: "Trade-in vehicle VIN",
    description: "Enter the 17-character Vehicle Identification Number"
  },
  tradeMiles: {
    label: "Trade-in vehicle mileage",
    description: "Enter the current odometer reading in miles"
  },
  tradeValue: {
    label: "Trade-in value amount",
    description: "Enter the agreed trade-in value in dollars"
  },
  balanceOwed: {
    label: "Balance owed on trade-in",
    description: "Enter the remaining loan balance on the trade-in vehicle"
  },
  netTrade: {
    label: "Net trade value",
    description: "Calculated net trade value after balance owed (optional)"
  },
  balanceOwedTo: {
    label: "Lender name",
    description: "Enter the name of the financial institution holding the loan (optional)"
  },
  accountNumber: {
    label: "Loan account number",
    description: "Enter the account number for the existing loan"
  },
  infoFrom: {
    label: "Information source",
    description: "Enter where this trade-in information was obtained"
  },
  goodWill: {
    label: "Good will amount",
    description: "Enter any additional good will amount being applied (optional)"
  }
};

export const ARIA_LIVE_REGIONS = {
  formErrors: "polite",
  formSuccess: "polite",
  navigationChanges: "polite"
};

// Color contrast validation
export const COLOR_CONTRAST = {
  // WCAG AA standards
  normalText: 4.5,
  largeText: 3.0,
  
  // Current theme colors for validation
  background: "#000000", // corvette-black
  text: "#ffffff", // corvette-white
  border: "rgba(177, 177, 180, 0.7)", // corvette-gray
  accent: "#61dafb" // corvette-accent
};

// Focus management utilities
export const FOCUS_MANAGEMENT = {
  // Focus trap for modal dialogs
  trapFocus: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    return () => container.removeEventListener('keydown', handleTabKey);
  },

  // Skip to main content
  skipToMain: () => {
    const mainContent = document.querySelector('main') || document.querySelector('[role="main"]');
    if (mainContent) {
      (mainContent as HTMLElement).focus();
    }
  }
};

// Screen reader announcements
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

import React, { createContext, useState, ReactNode, useEffect } from 'react';
import type { Stay, Article, Flight } from '../types';
import { allStays, articles, flightResults } from '../constants';

export enum Page {
  Home = 'Home',
  Stays = 'Stays',
  Hotels = 'Hotels',
  Wellness = 'Wellness',
  Circuits = 'Circuits',
  Flights = 'Flights',
  FlightResults = 'FlightResults',
  FlightBooking = 'FlightBooking',
  Omra = 'Omra',
  Reservations = 'Reservations', // This is the Booking page
  About = 'About',
  Contact = 'Contact',
  StayDetail = 'StayDetail',
  Booking = 'Booking',
  Auth = 'Auth',
  Blog = 'Blog',
  BlogPost = 'BlogPost',
}

interface CurrentPage {
  page: Page;
  params?: any;
}

type Language = 'FR' | 'EN' | 'AR';

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

const currencies: Currency[] = [
    { code: 'TND', name: 'Dinar Tunisien', symbol: 'DT' },
    { code: 'USD', name: 'Dollar Américain', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'Livre Sterling', symbol: '£' },
    { code: 'DZD', name: 'Dinar Algérien', symbol: 'DA' },
];

interface AppContextType {
  currentPage: CurrentPage;
  setCurrentPage: (page: Page, params?: any) => void;
  language: Language;
  setLanguage: (language: Language) => void;
  getSelectedStay: () => Stay | null;
  getSelectedArticle: () => Article | null;
  getSelectedFlight: () => Flight | null;
  isGroupModalOpen: boolean;
  toggleGroupModal: () => void;
  // Currency Conversion
  currencies: Currency[];
  selectedCurrency: Currency;
  exchangeRates: { [key: string]: number } | null;
  setCurrency: (currencyCode: string) => void;
  convertPrice: (priceInTND: number | undefined) => string;
  convertPriceValue: (priceInTND: number | undefined) => number;
  parseAndConvertPrice: (priceString: string | undefined) => string;
  convertFromSelectedCurrencyToTND: (priceInSelectedCurrency: number) => number;
}

export const AppContext = createContext<AppContextType>({
  currentPage: { page: Page.Home },
  setCurrentPage: () => {},
  language: 'FR',
  setLanguage: () => {},
  getSelectedStay: () => null,
  getSelectedArticle: () => null,
  getSelectedFlight: () => null,
  isGroupModalOpen: false,
  toggleGroupModal: () => {},
  // Currency Conversion Defaults
  currencies: currencies,
  selectedCurrency: currencies[0],
  exchangeRates: null,
  setCurrency: () => {},
  convertPrice: () => '',
  convertPriceValue: () => 0,
  parseAndConvertPrice: () => '',
  convertFromSelectedCurrencyToTND: () => 0,
});

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPageState] = useState<CurrentPage>({ page: Page.Home });
  const [language, setLanguage] = useState<Language>('FR');
  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(currencies[0]);
  const [exchangeRates, setExchangeRates] = useState<{ [key: string]: number } | null>(null);

  useEffect(() => {
    // Simulate fetching exchange rates with TND as the base currency.
    const mockRates = {
      'TND': 1,
      'USD': 0.32,
      'EUR': 0.30,
      'GBP': 0.25,
      'DZD': 43.5,
    };
    setExchangeRates(mockRates);
  }, []);

  const setCurrency = (currencyCode: string) => {
    const newCurrency = currencies.find(c => c.code === currencyCode);
    if (newCurrency) {
        setSelectedCurrency(newCurrency);
    }
  };
  
  const convertPriceValue = (priceInTND: number | undefined): number => {
    if (priceInTND === undefined || !exchangeRates) return 0;
    const rate = exchangeRates[selectedCurrency.code];
    if (!rate) return priceInTND;
    return priceInTND * rate;
  };
  
  const convertFromSelectedCurrencyToTND = (priceInSelectedCurrency: number): number => {
    if (!exchangeRates) return priceInSelectedCurrency;
    const rate = exchangeRates[selectedCurrency.code];
    if (!rate || rate === 0) return priceInSelectedCurrency;
    return priceInSelectedCurrency / rate;
  };

  const convertPrice = (priceInTND: number | undefined): string => {
    if (priceInTND === undefined || priceInTND === null || !exchangeRates) return 'N/A';
    const convertedValue = convertPriceValue(priceInTND);
    
    try {
        return new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: selectedCurrency.code,
            currencyDisplay: 'symbol',
            minimumFractionDigits: ['TND', 'DZD'].includes(selectedCurrency.code) ? 0 : 2,
            maximumFractionDigits: 2
        }).format(convertedValue).replace('TND', 'DT');
    } catch (e) {
        // Fallback for unsupported currency codes in some environments
        return `${convertedValue.toFixed(2)} ${selectedCurrency.symbol}`;
    }
  };
  
  const parseAndConvertPrice = (priceString: string | undefined): string => {
      if (!priceString) return 'N/A';
      const numericValue = parseFloat(priceString.replace(/[^0-9,.]/g, '').replace(',', '.'));
      if (!isNaN(numericValue)) {
          return convertPrice(numericValue);
      }
      return priceString; // fallback
  };

  const setCurrentPage = (page: Page, params: any = {}) => {
    setCurrentPageState({ page, params });
  };
  
  const toggleGroupModal = () => {
    setIsGroupModalOpen(prev => !prev);
  };

  const getSelectedStay = () => {
    if (currentPage.page === Page.StayDetail || currentPage.page === Page.Booking) {
      return allStays.find(s => s.id === currentPage.params?.id) || null;
    }
    return null;
  };

  const getSelectedArticle = () => {
    if (currentPage.page === Page.BlogPost) {
        return articles.find(a => a.id === currentPage.params?.id) || null;
    }
    return null;
  }
  
  const getSelectedFlight = () => {
    if (currentPage.page === Page.FlightBooking) {
      return flightResults.find(f => f.id === currentPage.params?.id) || null;
    }
    return null;
  }

  return (
    <AppContext.Provider value={{ currentPage, setCurrentPage, language, setLanguage, getSelectedStay, getSelectedArticle, getSelectedFlight, isGroupModalOpen, toggleGroupModal, currencies, selectedCurrency, exchangeRates, setCurrency, convertPrice, convertPriceValue, parseAndConvertPrice, convertFromSelectedCurrencyToTND }}>
      {children}
    </AppContext.Provider>
  );
};
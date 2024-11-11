import {ReactNode} from 'react';
export interface StockCardProps {
  logoUrl?: string;
  ticker: string;
  name: string;
}

export interface Stock {
  ticker: string;
  name: string;
  branding?: {
    logo_url?: string;
  };
}

export type StockLogoProps = {
  logoUrl?: string;
  ticker: string;
};

export interface StocksContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export interface StocksProviderProps {
  children: ReactNode;
}

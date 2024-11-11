import React, {createContext, useState} from 'react';
import {StocksContextType, StocksProviderProps} from '../types';

export const StocksContext = createContext<StocksContextType | undefined>(
  undefined,
);

export const StocksProvider: React.FC<StocksProviderProps> = ({children}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const value: StocksContextType = {
    searchTerm,
    setSearchTerm,
  };

  return (
    <StocksContext.Provider value={value}>{children}</StocksContext.Provider>
  );
};

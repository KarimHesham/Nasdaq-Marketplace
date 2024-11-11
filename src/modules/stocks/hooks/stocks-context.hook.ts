import {useContext} from 'react';
import {StocksContext} from '../context/stocks.context';

export const useStocks = () => {
  const context = useContext(StocksContext);
  if (context === undefined) {
    throw new Error('useStocks must be used within a StocksProvider');
  }
  return context;
};

import React from 'react';
import SearchInput from './search-input';
import StocksList from './stocks-list';

const StocksContainer: React.FC = () => {
  return (
    <>
      <SearchInput />

      <StocksList />
    </>
  );
};

export default StocksContainer;

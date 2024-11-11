import React from 'react';
import {Text, FlatList, View} from 'react-native';
import useTheme from '../../common/hooks/theme.hook';
import useGetStockData from '../hooks/get-stock-data.hook';
import StockCard from './stock-card';
import {stocksContainerStyles} from '../styles/stocks-container.styles';
import {Stock} from '../types';
import Loading from '../../common/components/loading';

const StocksList: React.FC = () => {
  const {backgroundStyle} = useTheme();
  const {
    stocks,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetStockData();

  const renderStockCard = ({item}: {item: Stock}) => {
    if (!item || !item.ticker) {
      return null;
    }

    return (
      <StockCard
        key={item.ticker}
        ticker={item.ticker}
        name={item.name}
        logoUrl={item.branding?.logo_url}
      />
    );
  };

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  if (isLoading) {
    return (
      <View style={stocksContainerStyles.loadingContainer}>
        <Loading />
      </View>
    );
  }

  if (isError) {
    return (
      <Text style={stocksContainerStyles.errorText}>Error fetching data.</Text>
    );
  }

  if (stocks.length === 0) {
    return (
      <Text style={stocksContainerStyles.errorText}>No stocks found.</Text>
    );
  }

  return (
    <FlatList
      style={[backgroundStyle, stocksContainerStyles.container]}
      data={stocks}
      renderItem={renderStockCard}
      keyExtractor={item => item.ticker}
      numColumns={2}
      contentContainerStyle={stocksContainerStyles.flatListContent}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={isFetchingNextPage ? <Loading /> : null}
    />
  );
};

export default StocksList;

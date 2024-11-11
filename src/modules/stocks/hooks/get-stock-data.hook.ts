import {useInfiniteQuery} from '@tanstack/react-query';
import {getStocksData} from '../api';
import Toast from 'react-native-toast-message';
import {useStocks} from './stocks-context.hook';

const useGetStockData = () => {
  const {searchTerm} = useStocks();

  const {data, isLoading, isError, fetchNextPage, isFetchingNextPage} =
    useInfiniteQuery({
      queryKey: ['stock-data', searchTerm],
      queryFn: () => getStocksData({searchTerm, limit: 20}),
      getNextPageParam: lastPage => lastPage?.next_url || undefined,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      onError: error => {
        if (error instanceof Error && error.message === 'Rate limit exceeded') {
          Toast.show({
            type: 'error',
            text1: 'Rate Limit Exceeded',
            text2: 'Please wait a moment and try again.',
          });
        }
      },
    });

  const stocks = data?.pages?.flatMap(page => page?.results) || [];

  return {
    stocks,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage: Boolean(data?.pages[data.pages.length - 1]?.next_url),
    isFetchingNextPage,
  };
};

export default useGetStockData;

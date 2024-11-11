import axios from 'axios';

// TODO: add API_URL and API_KEY to .env
export const getStocksData = async ({
  searchTerm = '',
  limit = 20,
  nextUrl = '',
}: {
  searchTerm?: string;
  limit?: number;
  nextUrl?: string;
}) => {
  try {
    const url = nextUrl || 'https://kimohesh.us.to/v3/reference/tickers';

    const params = nextUrl
      ? {}
      : {search: searchTerm, limit, apiKey: '4VBZ_b0fsMp7JcZZpMl4FfaiR83eNPg_'};

    const response = await axios.get(url, {params});
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 429) {
      console.error('Rate limit exceeded. Please try again later.');
      throw new Error('Rate limit exceeded');
    }
    console.error('Error fetching data:', error.message);
    throw error;
  }
};

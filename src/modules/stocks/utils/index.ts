/**
 * Extracts the first two characters from a ticker symbol
 * @param ticker - The stock ticker symbol (e.g., "AAPL")
 * @returns The first two characters uppercase (e.g., "AA")
 */
export const getTickerInitials = (ticker: string): string => {
  if (!ticker) {
    return '';
  }

  return ticker.slice(0, 2).toUpperCase();
};

export const getStockLogoUrl = (ticker: string): string => {
  // Ensure the ticker is lowercase to match the naming convention
  const formattedTicker = ticker.toLowerCase();
  return `https://s3.polygon.io/logos/${formattedTicker}/logo.png`;
};

export function throttle(func: (...args: any[]) => void, limit: number) {
  let lastCall = 0;

  return (...args: any[]) => {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func(...args);
    }
  };
}

export function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

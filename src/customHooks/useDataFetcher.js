import { useState, useEffect } from 'react';

const useDataFetcher = (url, delay = 0) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Unable to fetch data');
        }
        const data = await response.json();
        setData(data);
        setError(null);
      } catch (err) {
        if (!isLoading) {
          setError(err);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (delay > 0) {
      setTimeout(fetchData, delay);
    } else {
      fetchData();
    }
  }, [url, delay, isLoading]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useDataFetcher;

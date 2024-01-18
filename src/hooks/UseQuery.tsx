import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const useQuery = (queryKey: string) => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const clearQueryParameter = React.useCallback(() => {
    const queryParams = new URLSearchParams(search);
    queryParams.delete(queryKey);

    // Update the URL without the specified query parameter
    navigate({
      search: queryParams.toString(),
    });
  }, [search, queryKey, navigate]);

  return React.useMemo(() => {
    const queryParams = new URLSearchParams(search);
    const value: string | URLSearchParams | null = queryKey ? queryParams.get(queryKey) : queryParams;

    return { value, clearQueryParameter };
  }, [search, queryKey, clearQueryParameter]);
};

export default useQuery;

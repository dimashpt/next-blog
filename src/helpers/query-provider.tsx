'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const QueryProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools position="bottom" buttonPosition="bottom-right" />
    </QueryClientProvider>
  );
};

export default QueryProvider;

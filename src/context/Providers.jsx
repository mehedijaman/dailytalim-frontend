'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import SideBarsProvider from './SideBarsContext';
import FontResizeProvider from './FontResizeContext';

const Providers = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        defaultTheme="system"
        enableSystem={true}
        attribute="class"
        themes={['light', 'dark', 'warm']}
        disableTransitionOnChange
      >
        <SideBarsProvider>
          <FontResizeProvider>{children}</FontResizeProvider>
        </SideBarsProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;

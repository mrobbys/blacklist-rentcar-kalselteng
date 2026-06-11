import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.jsx';
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Tidak refetch otomatis saat user fokus kembali ke tab
      refetchOnWindowFocus: false,
      // Retry 1x jika gagal (default 3x, terlalu banyak untuk Google Apps Script)
      retry: 1,
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);

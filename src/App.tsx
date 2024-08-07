import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Table from './components/Table';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ backgroundColor: '#rgb(106 148 154)', height: '100vh', padding: '20px' }}>
        <Table />
      </div>
    </QueryClientProvider>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import LanguageSelection from './components/LanguageSelection';
import UserForm from './components/UserForm';
import DocumentSelection from './components/DocumentSelection';
import Preview from './components/Preview';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LanguageSelection />} />
            <Route path="/user-form" element={<UserForm />} />
            <Route path="/documents" element={<DocumentSelection />} />
            <Route path="/preview" element={<Preview />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Layout>
        <Toaster position="top-center" />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
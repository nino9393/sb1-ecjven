import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BookOpen, Settings } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const showHeader = location.pathname !== '/';

  return (
    <div className="min-h-screen bg-gray-50">
      {showHeader && (
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-indigo-600" />
              <span className="text-xl font-semibold text-gray-900">
                Document Portal
              </span>
            </Link>
            <Link
              to="/dashboard"
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <Settings className="h-5 w-5" />
            </Link>
          </div>
        </header>
      )}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
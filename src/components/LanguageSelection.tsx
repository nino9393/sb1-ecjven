import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Languages } from 'lucide-react';
import { useStore } from '../store';

export default function LanguageSelection() {
  const navigate = useNavigate();
  const setLanguage = useStore((state) => state.setLanguage);

  const handleLanguageSelect = (lang: 'ar' | 'en') => {
    setLanguage(lang);
    navigate('/user-form');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <div className="text-center mb-8">
          <Languages className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Select Your Language
          </h1>
          <p className="text-gray-600">Choose your preferred language to continue</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleLanguageSelect('en')}
            className="flex items-center justify-center px-6 py-4 border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            <span className="text-lg font-medium text-indigo-600">English</span>
          </button>
          
          <button
            onClick={() => handleLanguageSelect('ar')}
            className="flex items-center justify-center px-6 py-4 border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            <span className="text-lg font-medium text-indigo-600">العربية</span>
          </button>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useStore } from '../store';
import { Document } from '../types';

// Mock data - replace with your actual data fetching logic
const mockDocuments: Document[] = [
  {
    id: '1',
    title: 'Document 1',
    series: 'Series 1',
    language: 'en',
    path: '/path/to/doc1.pdf',
  },
  // Add more mock documents
];

export default function DocumentSelection() {
  const navigate = useNavigate();
  const { language, cart, addToCart, removeFromCart, updateQuantity } = useStore();

  const documents = mockDocuments.filter(
    (doc) => doc.language === language
  );

  const handleQuantityChange = (doc: Document, change: number) => {
    const item = cart.find((item) => item.id === doc.id);
    const currentQty = item?.quantity || 0;
    const newQty = Math.max(0, currentQty + change);

    if (newQty === 0) {
      removeFromCart(doc.id);
    } else {
      if (!item) {
        addToCart(doc);
      } else {
        updateQuantity(doc.id, newQty);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {language === 'en' ? 'Select Documents' : 'اختر المستندات'}
            </h1>
            <p className="text-gray-600">
              {language === 'en'
                ? 'Choose the documents you want to access'
                : 'اختر المستندات التي تريد الوصول إليها'}
            </p>
          </div>
          <button
            onClick={() => navigate('/preview')}
            className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>{cart.length}</span>
          </button>
        </div>

        <div className="grid gap-6">
          {documents.map((doc) => {
            const cartItem = cart.find((item) => item.id === doc.id);
            return (
              <div
                key={doc.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-indigo-200 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <FileText className="h-8 w-8 text-indigo-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">{doc.title}</h3>
                    <p className="text-sm text-gray-500">{doc.series}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(doc, -1)}
                    className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
                    disabled={!cartItem}
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="w-8 text-center">
                    {cartItem?.quantity || 0}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(doc, 1)}
                    className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
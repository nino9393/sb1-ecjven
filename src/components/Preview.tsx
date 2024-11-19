import React from 'react';
import { Download, Package } from 'lucide-react';
import { useStore } from '../store';

export default function Preview() {
  const { cart, language } = useStore();

  const handleDownload = (url: string) => {
    // Implement actual download logic
    window.open(url, '_blank');
  };

  const handleDownloadAll = () => {
    // Implement batch download logic
    cart.forEach((item) => {
      handleDownload(item.path);
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {language === 'en' ? 'Preview Documents' : 'معاينة المستندات'}
            </h1>
            <p className="text-gray-600">
              {language === 'en'
                ? 'Review and download your selected documents'
                : 'راجع وحمل المستندات المختارة'}
            </p>
          </div>
          {cart.length > 1 && (
            <button
              onClick={handleDownloadAll}
              className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Package className="h-5 w-5" />
              <span>
                {language === 'en' ? 'Download All' : 'تحميل الكل'}
              </span>
            </button>
          )}
        </div>

        <div className="grid gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <div className="p-4 flex justify-between items-center border-b border-gray-200">
                <div>
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">
                    {language === 'en'
                      ? `Quantity: ${item.quantity}`
                      : `الكمية: ${item.quantity}`}
                  </p>
                </div>
                <button
                  onClick={() => handleDownload(item.path)}
                  className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  <Download className="h-5 w-5" />
                  <span>
                    {language === 'en' ? 'Download' : 'تحميل'}
                  </span>
                </button>
              </div>
              <div className="aspect-video bg-gray-100">
                {/* Replace with actual PDF preview */}
                <img
                  src={`https://api.cloudinary.com/v1_1/demo/image/fetch?url=${encodeURIComponent(
                    item.path
                  )}`}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
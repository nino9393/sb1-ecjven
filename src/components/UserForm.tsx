import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserCheck } from 'lucide-react';
import { useStore } from '../store';

interface FormData {
  name: string;
  email: string;
  phone: string;
  series: string;
}

export default function UserForm() {
  const navigate = useNavigate();
  const language = useStore((state) => state.language);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // In a real app, you'd save this to your backend
    navigate('/documents');
  };

  const series = [
    'Series 1',
    'Series 2',
    'Series 3',
    // Add your series here
  ];

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <UserCheck className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {language === 'en' ? 'Contact Information' : 'معلومات الاتصال'}
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'en' ? 'Full Name' : 'الاسم الكامل'}
            </label>
            <input
              {...register('name', { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">
                {language === 'en' ? 'Name is required' : 'الاسم مطلوب'}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
            </label>
            <input
              type="email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {language === 'en'
                  ? 'Valid email is required'
                  : 'البريد الإلكتروني مطلوب'}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'en' ? 'Phone Number' : 'رقم الهاتف'}
            </label>
            <input
              type="tel"
              {...register('phone', { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">
                {language === 'en'
                  ? 'Phone number is required'
                  : 'رقم الهاتف مطلوب'}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'en' ? 'Select Series' : 'اختر السلسلة'}
            </label>
            <select
              {...register('series', { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="">
                {language === 'en' ? 'Select a series' : 'اختر سلسلة'}
              </option>
              {series.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {errors.series && (
              <p className="mt-1 text-sm text-red-600">
                {language === 'en'
                  ? 'Please select a series'
                  : 'الرجاء اختيار سلسلة'}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {language === 'en' ? 'Continue' : 'متابعة'}
          </button>
        </form>
      </div>
    </div>
  );
}
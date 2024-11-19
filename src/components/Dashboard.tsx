import React from 'react';
import { BarChart, Users, FileText } from 'lucide-react';
import { UserSubmission } from '../types';

// Mock data - replace with your actual data fetching logic
const mockSubmissions: UserSubmission[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    language: 'en',
    series: 'Series 1',
    documents: [
      {
        id: '1',
        title: 'Document 1',
        series: 'Series 1',
        language: 'en',
        path: '/path/to/doc1.pdf',
      },
    ],
    timestamp: new Date().toISOString(),
  },
  // Add more mock submissions
];

export default function Dashboard() {
  const stats = {
    totalUsers: mockSubmissions.length,
    totalDownloads: mockSubmissions.reduce(
      (acc, sub) => acc + sub.documents.length,
      0
    ),
    popularSeries: 'Series 1',
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Monitor document access and user activity</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="h-6 w-6 text-indigo-600" />
            <h2 className="text-lg font-semibold text-gray-900">Total Users</h2>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.totalUsers}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="h-6 w-6 text-indigo-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              Total Downloads
            </h2>
          </div>
          <p className="text-3xl font-bold text-gray-900">
            {stats.totalDownloads}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <BarChart className="h-6 w-6 text-indigo-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              Popular Series
            </h2>
          </div>
          <p className="text-3xl font-bold text-gray-900">
            {stats.popularSeries}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Series
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Language
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Documents
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockSubmissions.map((submission) => (
                <tr key={submission.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {submission.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {submission.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {submission.series}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {submission.language === 'en' ? 'English' : 'Arabic'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {submission.documents.length}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(submission.timestamp).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
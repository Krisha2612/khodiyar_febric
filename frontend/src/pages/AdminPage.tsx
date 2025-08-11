import React, { useState } from 'react';

const TABS = [
  { key: 'dashboard', label: 'Dashboard' },
  { key: 'products', label: 'Products' },
  { key: 'orders', label: 'Orders' },
  { key: 'users', label: 'Users' },
];

const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="container-padded py-12">
      <h1 className="text-3xl font-heading mb-6">Admin Panel</h1>
      <div className="flex space-x-4 mb-8">
        {TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-md font-medium ${activeTab === tab.key ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow p-6 min-h-[300px]">
        {activeTab === 'dashboard' && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
            <p>Summary statistics and charts will appear here.</p>
          </div>
        )}
        {activeTab === 'products' && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Product Management</h2>
            <p>View, add, edit, or delete products here.</p>
          </div>
        )}
        {activeTab === 'orders' && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Order Management</h2>
            <p>View and update orders here.</p>
          </div>
        )}
        {activeTab === 'users' && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">User Management</h2>
            <p>View and manage users here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage; 
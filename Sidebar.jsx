import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r shadow-md p-4">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Dashboard</h2>
      <nav className="space-y-3">
        <a href="#" className="block px-4 py-2 rounded hover:bg-blue-100 text-gray-700">🏠 Home</a>
        <a href="#" className="block px-4 py-2 rounded hover:bg-blue-100 text-gray-700">📊 Analytics</a>
        <a href="#" className="block px-4 py-2 rounded hover:bg-blue-100 text-gray-700">🛒 Orders</a>
        <a href="#" className="block px-4 py-2 rounded hover:bg-blue-100 text-gray-700">👤 Profile</a>
        <a href="#" className="block px-4 py-2 rounded hover:bg-blue-100 text-gray-700">⚙️ Settings</a>
      </nav>
    </aside>
  );
}

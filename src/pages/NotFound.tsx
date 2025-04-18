import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-memorial-gold mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">הדף לא נמצא</h2>
        <p className="text-gray-600 mb-6">הדף שחיפשת אינו קיים</p>
        <Link
          to="/"
          className="bg-memorial-gold text-white px-6 py-2 rounded-lg hover:bg-memorial-gold/90 transition-colors"
        >
          חזרה לדף הבית
        </Link>
      </div>
    </div>
  );
};

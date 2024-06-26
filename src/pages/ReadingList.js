import React from 'react';
import readings from '../data/BooksData';

function ReadingList() {

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl text-gray-800 text-center font-semibold mb-6">My Reading List 📖</h2>
      <ul>
        {readings.map(reading => (
          <li key={reading.id} className="text-gray-700 py-2 border-b last:border-b-0">
            <span className="font-medium">{reading.title}</span> - <span className="text-sm italic">{reading.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReadingList;

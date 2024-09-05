import React from 'react';
import readings from '../data/BooksData';
import { motion } from 'framer-motion';

function ReadingList() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="reading-list-container">
        <h1>My Favorite Reads 📖</h1>
        <p className="text-center pt-3">
          currently trying {' '}
          <a 
            href="https://www.goodreads.com/thienantran" 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-500 hover:text-black underline transition-colors duration-300"
          >
            goodreads.com/thienantran
          </a>
        </p>
        <div className="max-w-4xl mx-auto p-6 bg-white">
        <ul>
          {readings.map(reading => (
            <li key={reading.id} className="text-gray-700 py-2 border-b last:border-b-0">
              <span className="font-bold">{reading.title}</span> by <span className="text-sm italic">{reading.author}</span>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default ReadingList;

import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="/PostChapter" className="text-white font-bold text-xl">Post Chapter</a>
          <a href="/PostTopic" className="text-white font-bold text-xl ml-4">Post Topic</a>
          <a href="/PostQuestion" className="text-white font-bold text-xl ml-4">Post quessin</a>
        </div>
        <div className="flex-grow md:flex md:items-center md:w-auto">
          <div className="md:flex-grow">
            <div className="relative">
              <input type="text" placeholder="Search..." className="bg-gray-700 text-white rounded-full py-2 px-4 pl-10 w-full focus:outline-none focus:bg-gray-600" />
            </div>
          </div>
          <button className="mt-4 md:mt-0 ml-3 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Button</button>
        </div>
      </div>
    </nav>
  );
}

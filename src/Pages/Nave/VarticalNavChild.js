import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const VerticalNavChild = () => {
  const [chapters, setChapters] = useState([]);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [openTopicIndex, setOpenTopicIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7128/api/Chapter/getAllChapter');
        const data = await response.json();
        setChapters(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
    setOpenTopicIndex(null); // Close topic dropdown when chapter dropdown is toggled
  };

  const toggleTopicDropdown = (topicIndex) => {
    setOpenTopicIndex((prevIndex) => (prevIndex === topicIndex ? null : topicIndex));
  };

  return (
    <nav className="w-full h-full bg-gray-900  text-white">
      <ul className="p-1">
        {chapters?.map((chapter, index) => (
          <li key={index} className="mb-2">
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full flex items-center justify-between bg-gray-800 px-1 py-1 rounded-md transition duration-300 hover:bg-gray-700 focus:outline-none "
            >
              <span className="text-sm/[4px]">{chapter.title}</span>
              <svg
                className={`w-4 h-4 ${openDropdownIndex === index ? 'transform rotate-90' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 5.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {openDropdownIndex === index && (
              <ul className="ml-4">
                {chapter.tipicList?.map((topic, topicIndex) => (
                  <li key={topicIndex} className="my-1">
                    <button
                      onClick={() => toggleTopicDropdown(topicIndex)}
                      className="block px-1 py-2 bg-gray-700  rounded-md transition duration-300 hover:bg-gray-600 focus:outline-none text-sm/[8px]"
                    >
                      {topic.title}
                    </button>
                    {openTopicIndex === topicIndex && (
                      <ul className="ml-4">
                        {topic.questionsList.map((question, questionIndex) => (
                          <li key={questionIndex} className="mb-1">
                            <Link
                              to={`ans/${question.id}`}
                              className="block mt-1 px-1  bg-gray-600 rounded-md transition duration-300 hover:bg-gray-500 focus:outline-none text-sm"
                            >
                              {question.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default VerticalNavChild;

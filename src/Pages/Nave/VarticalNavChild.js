import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const VerticalNavChild = () => {
  const [chapters, setChapters] = useState([]);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [openTopicIndex, setOpenTopicIndex] = useState(null);
  const dropdownRefs = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); // Assuming data.json is in the public folder
        const data = await response.json();
        setChapters(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    console.log(chapters);
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
    <>
      {chapters?.map((chapter, index) => (
        <div key={index} ref={(el) => (dropdownRefs.current[index] = el)}>
          <button
            onClick={() => toggleDropdown(index)}
            className="flex items-center gap-2 bg-gray-200 p-2 rounded-md"
          >
            {chapter.title}
          </button>
          {openDropdownIndex === index && (
            <ul className="ml-4">
              {chapter.topics?.map((topic, topicIndex) => (
                <li key={topicIndex}>
                  <button
                    onClick={() => toggleTopicDropdown(topicIndex)}
                    className="block ps-6 text-sm"
                  >
                    {topic.title}
                  </button>
                  {openTopicIndex === topicIndex && (
                    <ul className="ml-4">
                      {topic.questions.map((question, questionIndex) => (
                        <li key={questionIndex}>
                          <Link to={`ans/${topic.id}`} className="block ps-6 text-sm">
                            {question}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </>
  );
};

export default VerticalNavChild;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PostQuestion() {
  const [questionData, setQuestionData] = useState({
    title: '',
    answer: '',
    topicId: '',
  });
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function fetchTopics() {
      try {
        const response = await axios.get('https://localhost:7128/api/Topic/getAllTopic');
        setTopics(response.data);
      } catch (error) {
        console.error('Error fetching topics:', error);
        // Handle error, show error message to user, etc.
      }
    }

    fetchTopics();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestionData({
      ...questionData,
      [name]: value,
    });
  };
console.log(questionData);
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7128/api/Questions/Create', questionData);
      console.log('Question created:', response.data);
      window.location.reload();
      // Do something after successful creation, like showing a success message or redirecting
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        const errorMessage = error.response.data.errors.answers[0]; // Get the first error message for the 'answers' field
        console.error('Error creating question:', errorMessage);
        // Display the error message to the user, e.g., using a toast or alert
      } else {
        console.error('Error creating question:', error);
        // Handle other types of errors
      }
    }
  };
  
  

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Post Question</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Question Title:</label>
          <input type="text" id="title" name="title" value={questionData.title} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="answer" className="block text-sm font-medium text-gray-700">Question Answer:</label>
          <input type="text" id="answer" name="answers" value={questionData.answers} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />

        </div>
        <div className="mb-4">
          <label htmlFor="topic" className="block text-sm font-medium text-gray-700">Select Topic:</label>
          <select id="topic" name="topicId" value={questionData.topicId} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full">
            <option value="">Select a Topic</option>
            {topics.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic.title}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">Create Question</button>
      </form>
    </div>
  );
}

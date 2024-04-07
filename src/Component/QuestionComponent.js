import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const QuestionComponent = () => {
  const [questions, setQuestions] = useState([]);
  const { ansId } = useParams();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`https://localhost:7128/api/Questions/getQuestions/${ansId}`);
        const data = await response.json();
        setQuestions(data);
        
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [ansId]);
 
  return (
    <div className="border border-gray-300 p-4 mb-4 rounded-md">
      <h2 className="text-lg font-semibold">{questions.title}</h2>
      <p className="text-gray-600">{questions.answers}</p>
    </div>
  );
};

export default QuestionComponent;

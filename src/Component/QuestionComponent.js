import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const QuestionComponent = () => {
  const [questions, setQuestions] = useState({});
  const { ansId } = useParams();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('/data.json'); // Adjust the path as needed
        const data = await response.json();
        data.map((chapter)=>{
         var ques = chapter.topics.find((q)=>q.id == ansId);
         console.log(ques);
         setQuestions(ques);
        });
        console.log(questions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [ansId]);
  console.log(questions);
  return (
    <div className="border border-gray-300 p-4 mb-4 rounded-md">
      <h2 className="text-lg font-semibold">{questions?.title}</h2>
      <p className="text-gray-600">{questions?.queDetails}</p>
    </div>
  );
};

export default QuestionComponent;

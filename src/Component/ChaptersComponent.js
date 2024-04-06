import React from 'react';
import QuestionComponent from './QuestionComponent';

const ChaptersComponent = ({ chapters }) => {
  return (
    <>
      {chapters.map((chapter, chapterIndex) => (
        <div key={chapterIndex}>
          <h1>{chapter.title}</h1>
          {chapter.topics.map((topic, topicIndex) => (
            <div key={topicIndex}>
              <h2>{topic.title}</h2>
              {topic.questions.map((question, questionIndex) => (
                <QuestionComponent
                  key={questionIndex}
                  id={topic.id}
                  title={topic.title}
                  queDetails={topic.queDetails}
                  question={question}
                />
              ))}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default ChaptersComponent;

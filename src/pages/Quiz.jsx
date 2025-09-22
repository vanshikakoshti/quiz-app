// Quiz.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import quizData from '../data/quizData'; // all topics: css, html, react

const Quiz = () => {
  const { topic } = useParams(); // topic = 'css'
  const navigate = useNavigate();
  const questions = quizData[topic] || [];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowScore(false);
  };

  if (!questions.length) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl">Invalid or missing quiz topic: {topic}</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h2 className="text-2xl font-bold mb-4 capitalize">{topic} Quiz</h2>
      {showScore ? (
        <div className="text-center">
          <h3 className="text-xl mb-4">Your Score: {score} / {questions.length}</h3>
          <button
            onClick={restartQuiz}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mr-4"
          >
            Restart
          </button>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Home
          </button>
        </div>
      ) : (
        <div className="w-full max-w-md">
          <h4 className="text-lg font-semibold mb-4">{questions[current].question}</h4>
          {questions[current].options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="w-full mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;

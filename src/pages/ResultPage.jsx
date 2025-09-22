import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import questions from '../data/quizData';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers } = location.state || {};

  if (!answers) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No results to show. Please take the quiz first.</p>
      </div>
    );
  }

  const score = questions.reduce((acc, q) => {
    return acc + (answers[q.id] === q.answer ? 1 : 0);
  }, 0);

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Your Score: {score} / {questions.length}</h1>
      <button
        onClick={handleRestart}
        className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default ResultPage;

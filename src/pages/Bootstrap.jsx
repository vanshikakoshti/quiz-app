import React from 'react';
import { useNavigate } from 'react-router-dom';

const Bootstrap = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <h1 className="text-3xl font-bold mb-4">Bootstrap Quiz</h1>
      <p className="mb-6 text-lg">Test your knowledge about Bootstrap!</p>
      <button
        onClick={() => navigate('/quiz/bootstrap')}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Bootstrap;
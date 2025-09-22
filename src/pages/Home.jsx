import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-blue-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Quiz App</h1>
      <p className="text-lg mb-8 text-black-700">Choose a category to begin:</p>

      <div className="flex flex-wrap gap-6 justify-center">
        <div className="home-course-container">
          <h2 className="text-lg font-semibold">HTML Quiz</h2>
          <p className="text-md mt-2 text-white text-center">
           Test your knowledge about HTML!
          </p>
          <Link to="/html" className="home-course-btn">
            HTML
          </Link>
        </div>
        <div className="home-course-container">
          <h2 className="text-lg font-semibold">CSS Quiz</h2>
          <p className="text-md mt-2 text-white text-center">
           Test your knowledge about CSS!
          </p>
          <Link to="/css" className="home-course-btn">
            CSS
          </Link>
        </div>
        <div className="home-course-container">
          <h2 className="text-lg font-semibold">JAVASCRIPT Quiz</h2>
          <p className="text-md mt-2 text-white text-center">
           Test your knowledge about JAVASCRIPT!
          </p>
          <Link to="/javascript" className="home-course-btn">
            JAVASCRIPT
          </Link>
        </div>
        <div className="home-course-container">
          <h2 className="text-lg font-semibold">BOOTSTRAP Quiz</h2>
          <p className="text-md mt-2 text-white text-center">
           Test your knowledge about BOOTSTRAP !
          </p>
          <Link to="/bootstrap" className="home-course-btn">
            BOOTSTRAP
          </Link>
        </div>
        <div className="home-course-container">
          <h2 className="text-lg font-semibold">REACT Quiz</h2>
          <p className="text-md mt-2 text-white text-center">
           Test your knowledge about REACT!
          </p>
          <Link to="/reactjs" className="home-course-btn">
            REACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ Only import Routes/Route
import Home from './pages/Home';
import Html from './pages/Html';
import Quiz from './pages/Quiz';
import ResultPage from './pages/ResultPage';
import Navbar from './components/Navbar';
import Css from './pages/Css';
import Javascript from './pages/Javascript';
import Bootstrap from './pages/Bootstrap';
import ReactJs from './pages/ReactJs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:topic" element={<Quiz />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/bootstrap" element={<Bootstrap />} />
        <Route path="/reactjs" element={<ReactJs />} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;

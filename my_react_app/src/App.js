// src/App.js
import logo from './logo.svg';
import './App.css';
import HelloWithProps from './components/HelloWithProps';
import jennaImg from './/img/jenna.avif';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoinPage from "./pages/CoinPage";
import FeedbackApp from './pages/FeedbackPages';
import CustomApp from './pages/ToDoApp';

<HelloWithProps 
  to="Allievo" 
  from="zio" 
  exclamationNumber={10} 
  img={jennaImg} 
/>

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin" element={<CoinPage />} />
        <Route path="/feedback" element={<FeedbackApp />} />
        <Route path="/custom" element={<CustomApp />} />
      </Routes>
    </Router>
  );
}

export default App;

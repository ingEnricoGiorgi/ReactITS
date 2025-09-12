// src/App.js
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import HelloWithProps from './components/HelloWithProps';
import World from './components/World';
import Greet from './components/Greet';
import jennaImg from './/img/jenna.avif';
import Header from "./components/Header";
import Article from "./components/Article";
import Counter from './components/Counter';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoinPage from "./pages/CoinPage";

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
      </Routes>
    </Router>
  );
}
/*
function App() {
  return (
    <div className="App">
      <Header title="My Blog" subtitle="Learning React Components" />

      <Article 
        title="First Post"
        img={jennaImg}
        date="2025-09-10"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
      </Article>

      <Article 
        title="Second Post"
        img={logo}
        date="2025-09-11"
      >
        Aliquam erat volutpat. Curabitur convallis mauris at sapien dictum, sed tristique mi convallis.
      </Article>

      <Hello />
      <World />
      <Greet />
      <HelloWithProps 
        to="Allievo" 
        from="zio" 
        exclamationNumber={10} 
        img={jennaImg} 
      />


      <h2>Counter demo</h2>
      <Counter />

    </div>
  
    
  );
}
*/
export default App;

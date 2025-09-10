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

<HelloWithProps 
  to="Allievo" 
  from="zio" 
  exclamationNumber={10} 
  img={jennaImg} 
/>


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

    </div>
    
  );
}

export default App;

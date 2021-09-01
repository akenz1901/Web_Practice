import './App.css';
import Header from './reusableComponent/Header'
import Personality from "./Personality";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div className="about">
          <Personality />
        </div>
      </header>
      
    </div>
  );
}

export default App;

import './App.css';
import Header from './reusableComponent/Header'
import Personality from "./Personality";
import Headlines from './Headlines';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div className="about">
          <Personality />
          <Headlines/>
        </div>
      </header>
      
    </div>
  );
}

export default App;

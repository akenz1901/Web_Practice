import './App.css';
import Header from './reusableComponent/Header'
import Personality from "./Personality";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body className="personal">
        <Personality />
      </body>
    </div>
  );
}

export default App;

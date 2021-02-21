import './App.css';
import UseEffectApi from './Component/UseEffect/UseEffectApi';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <UseEffectApi/>
      </Router>
    </div>
  );
}

export default App;

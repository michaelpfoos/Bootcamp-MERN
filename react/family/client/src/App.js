import './App.css';
import { Router } from '@reach/router';
import Home from './views/Home';
import AddFamilyView from './views/AddFamilyView';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <AddFamilyView path="/add" />
      </Router>        
    </div>
  );
}

export default App;

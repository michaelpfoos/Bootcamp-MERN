import './App.css';
import { Router } from '@reach/router';
import Home from './views/Home';
import AddFamilyView from './views/AddFamilyView';
import EditFamilyView from './views/EditFamilyView';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <AddFamilyView path="/add" />
        <EditFamilyView path="/edit/:id" />
      </Router>        
    </div>
  );
}

export default App;

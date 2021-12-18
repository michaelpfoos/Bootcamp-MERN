import './App.css';
import { Router } from '@reach/router';
import Home from './views/Home';
import AddFamilyView from './views/AddFamilyView';
import EditFamilyView from './views/EditFamilyView';
import FamilyDetailView from './views/FamilyDetailView';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <AddFamilyView path="/add" />
        <EditFamilyView path="/edit/:id" />
        <FamilyDetailView path="/:id" />
      </Router>        
    </div>
  );
}

export default App;

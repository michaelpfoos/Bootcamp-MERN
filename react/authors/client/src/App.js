import './App.css';
import { Router } from '@reach/router';
import Root from './views/Root';
import Edit from './views/Edit';
import New from './views/New';

function App() {

  return (
    <div className="App">
      <Router>
        <Root path="/" />
        <New path="/new" />
        <Edit path="/edit/:_id" />
      </Router>    
    </div>
  );
}

export default App;

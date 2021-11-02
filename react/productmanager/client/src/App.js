import './App.css';
import { Router } from '@reach/router';
import Main from './views/main';
import ProductDetails from './components/ProductDetails';


function App() {
  return (
    <div className="App">
    <Router>
      <Main path="/" /> 
      <ProductDetails path="/:_id" />           
    </Router>
    </div>
  );
}

export default App;

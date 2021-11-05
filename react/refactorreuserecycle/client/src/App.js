import './App.css';
import { Router } from '@reach/router';
import Main from './views/main';
import ProductDetails from './components/ProductDetails';
import ProductManager from './components/ProductManager';

function App() { 

  return (
    <div className="App">
    <Router>
      <Main path="/" /> 
      <ProductDetails path="/:_id" />
      <ProductManager path="/:_id/edit" />           
    </Router>
    </div>
  );
}

export default App;
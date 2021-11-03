import './App.css';
import { useState } from 'react';
import { Router } from '@reach/router';
import Main from './views/main';
import ProductDetails from './components/ProductDetails';
import EditProduct from './components/EditProduct';
import axios from 'axios';
import { navigate } from '@reach/router' //https://reach.tech/router/api/navigate


function App() {

  const [productFormSubmitted, setProductFormSubmitted] = useState(false);

  //in theory I should be able to declare a function to delete the product here and pass it as a prop to any component that needs it.
  const deleteProduct = (_id, e) => {

    const url = `http://linuxhome:8000/api/productmanagers/${_id}`          

    axios.delete(url)
      .then(res=>{   
        //Time to go home
        //With if else  
        // if ( e.target.value != 'Delete' ) {
        //   navigate("/");          
        // } 
        // else {
        //   setProductFormSubmitted(!productFormSubmitted);
        // }
        //rewrite as a ternary to stay consistent with es6
        ( e.target.value !== 'Delete' ) ?  navigate("/") : setProductFormSubmitted(!productFormSubmitted); 
        
      })       
  }

  return (
    <div className="App">
    <Router>
      <Main deleteProduct={deleteProduct} productFormSubmitted={productFormSubmitted} setProductFormSubmitted={setProductFormSubmitted} path="/" /> 
      <ProductDetails deleteProduct={deleteProduct} path="/:_id" />
      <EditProduct deleteProduct={deleteProduct} path="/:_id/edit"/>           
    </Router>
    </div>
  );
}

export default App;
import './App.css';
import { Router } from '@reach/router';
import DisplayNumberOrWord from './components/DisplayNumberOrWord';
import HomePage from './components/HomePage';
import DisplayWordAndCSS from './components/DisplayWordAndCSS';

//Create localhost:3000/hello/blue/red: This should display the word "hello" in blue text with a red background. It should work with any other valid word and colors.
//word/fontcolor/backgroundcolor

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path="/home/" />  
        <DisplayNumberOrWord path="/:UrlInput" />   
        <DisplayWordAndCSS path="/:word/:fontColor/:backgroundColor" />     
      </Router> 
    </div>
  );
}

export default App;

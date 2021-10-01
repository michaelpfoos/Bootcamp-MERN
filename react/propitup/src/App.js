import './App.css';
import PersonCard from './components/PersonCard';


function App() {
  return (
    <div className="App">
       <PersonCard firstName={ "Michael" } lastName={ "Foos" } age={ "41" } hairColor={ "Brown" }/>
       <PersonCard firstName={ "Sandra" } lastName={ "Foos" } age={ "35" } hairColor={ "Blonde" }/>   
       <PersonCard firstName={ "Jadann" } lastName={ "Foos" } age={ "4" } hairColor={ "Blonde" }/>   
       <PersonCard firstName={ "Aryia" } lastName={ "Foos" } age={ "1" } hairColor={ "Blonde" }/>        
    </div>
  );
}

export default App;

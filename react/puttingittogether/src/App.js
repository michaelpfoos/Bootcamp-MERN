import './App.css';
import FaceCard from './components/FaceCard';

function App() {
  return (
    <div className="App">
      <FaceCard lastName={ "Doe" } firstName={ "Jane" } age={ 45 } hairColor={ "Black" }/>
      <FaceCard lastName={ "Smith" } firstName={ "John" } age={ 88 } hairColor={ "Brown" }/>
    </div>
  );
}

export default App;

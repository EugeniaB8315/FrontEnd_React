import './App.css';
import VegetaF from './components/VegetaF';
import Vegeta from './components/Vegeta';
//App renderiza componente padre "Vegeta"
function App() {
  return (
    <div >
      <VegetaF/>
      <Vegeta/>
    </div>
  );
}

export default App;

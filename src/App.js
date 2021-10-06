import './App.css';
import Counter from './components/Counter';
import Data from './components/data';
import Product from './components/Product';

function App() {
   return (
    <div className="App">
      <Product/>
      <Counter/>
      <Data/>
    </div>
  );
}

export default App;

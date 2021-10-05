import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
    <Person name="Faruk"/>
    <Person/>
    <Person/>
    <Person/>
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className="person">
    <h1>Shakib al Hasan</h1>
    <h4>Professor:Crickter</h4>
  </div>
  )
  
}

export default App;

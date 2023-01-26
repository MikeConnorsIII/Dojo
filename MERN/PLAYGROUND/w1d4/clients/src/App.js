import './App.css';
import First from './components/First';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <First firstName ="Ruben" lastName="Ocasio" number={21}></First>
      <First firstName="Colby" lastName="Dumon" number={21}> </First>
      <First firstName="Jason" lastName="Yang" number={21}> </First>
    </div>
  );
}

export default App;

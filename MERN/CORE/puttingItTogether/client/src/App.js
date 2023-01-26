import './App.css';
import Birthday from './components/Birthday';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <h1>List of People</h1>
      <Birthday firstName={"John"} lastName={"Bobby"} age={10} color={"brown"}/>
      <Birthday firstName={"Mike"} lastName={"Alfred"} age={15} color={"brown"}/>
      <Birthday firstName={"Steve"} lastName={"Popeye"} age={50} color={"brown"}/>
      <Birthday firstName={"Ricky"} lastName={"Bobby"} age={12} color={"brown"}/>
      <Birthday firstName={"JD"} lastName={"Stank"} age={17} color={"brown"}/>
    </div>
  );
}

export default App;


// install: npm install react-bootstrap bootstrap
// import into app.js: import "bootstrap/dist/css/bootstrap.min.css";

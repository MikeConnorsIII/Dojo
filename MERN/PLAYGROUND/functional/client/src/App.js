import './App.css';
import Menuitem from './components/Menuitem';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <h1>Menu</h1>
      <Menuitem dishName={"Sushi"} price={12.99} likes={10} />
      <Menuitem dishName={"Pizza"} price={20.99} likes={15} />
      <Menuitem dishName={"Sausage"} price={15.00} likes={50} />
      <Menuitem dishName={"Spaghetti"} price={12.99} likes={12} />
      <Menuitem dishName={"Wings"} price={8.99} likes={17} />
    </div>
  );
}

export default App;


// install: npm install react-bootstrap bootstrap
// import into app.js: import "bootstrap/dist/css/bootstrap.min.css";

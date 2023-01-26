
import './App.css';
import MenuItems from './components/MenuItems';

function App() {
  return (
    <div className="App">
      <h1>Dojo Dinner Menu</h1>
      <MenuItems dishName={"Tacos"} price={2.50}>
      <p>It's Good</p>
      <em>Note: Beef, lettuce, tomatoes, cheese, onions, cilantro </em>
      </MenuItems>
      
      <MenuItems dishName={"Sushi"} price={18.00}>
      <p>It's Good</p>
      <em>Note:Contains fish</em>
      </MenuItems>

      <MenuItems dishName={"Lasanga"} price={20.00}>
      <p>It's Special</p>
      <em>Note:Pasta quiche</em>
      </MenuItems>
    </div>
      
  );
}

export default App;

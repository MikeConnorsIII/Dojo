import './App.css'
import Form from './components/Form';
import People from './components/People';
import {Routes, Route} from 'react-router-dom'
import Planets from './components/Planets';
import Error from './components/Error';


function App() {
  return (
    <div className="App">
      <Form></Form>
     <Routes>
      <Route path='/' element={<h1>Welcome to Luke api</h1>}></Route>
      <Route path='/people/:id' element={<People/>}></Route>
      <Route path='/planets/:id' element={<Planets/>}> </Route>
      <Route path='/error' element={<Error/>}> </Route>

     </Routes>
    </div>
  );
}

export default App;
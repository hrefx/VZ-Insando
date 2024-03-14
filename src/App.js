import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import AddCard from './AddCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<Home></Home>}></Route>
          <Route path="/add-card" exact element={<AddCard></AddCard>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

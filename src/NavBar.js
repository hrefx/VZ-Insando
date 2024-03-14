import { Link } from 'react-router-dom';
import './App.css';

function NavBar() {
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-card">Add Card</Link></li>
        </ul>
    </div>
  );
}

export default NavBar;
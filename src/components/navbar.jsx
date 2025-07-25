import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"><span>Insider</span>jobs</div>
      <div className="nav-links">
        <Link to="/recruiter-login" className="nav-link">Recruiter Login</Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

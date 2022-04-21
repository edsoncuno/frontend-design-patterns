import { Link } from "react-router-dom";
import './Navbar.css'

const App = () => {
    return (
        <nav className="navbarStyle">
            <Link to="/">Home</Link>
            <Link to="/singelton">Singelton</Link>
            <Link to="/bridge">Bridge</Link>
        </nav>
    );
}

export default App;
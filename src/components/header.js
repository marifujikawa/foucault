import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link className="app-link" to="/">Home</Link>
            <Link className="app-link" to="/books">Livres</Link>
            <Link className="app-link" to="/authorslife">La vie de l'auteur;</Link>
            <Link className="app-link" to="/javascript">Javascript</Link>
        </header>
    )
}
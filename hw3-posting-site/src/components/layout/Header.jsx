import { Link } from "react-router-dom";

export function Header() {
    return <header className="header">
        <nav>
            <Link to='/start'>Root</Link>
            <Link to='/about'>About</Link>
            <Link to='/terms'>Terms</Link>
        </nav>
    </header>;
}
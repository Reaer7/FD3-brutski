import { Link } from "react-router-dom";

export function Header() {
    return <header className="header">
        <nav>
            <Link to='/mouse'>Mouse</Link>
            <Link to='/timers'>Timers</Link>
        </nav>
    </header>;
}
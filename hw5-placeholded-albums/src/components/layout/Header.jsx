import { Link } from "react-router-dom";

export function Header() {
	return <header className="header">
		<nav>
			<Link to='/'>Home</Link>
			<Link to='/albums'>Albums</Link>
			<Link to='/users'>Users</Link>
			<Link to='/randomPhoto'>RandomPhoto</Link>
		</nav>
	</header>;
}
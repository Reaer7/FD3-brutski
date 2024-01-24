import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export function ErrorPage() {
	const { state } = useLocation();
	const { message } = state;

	return <div key={uuidv4()} id="error-page">
		<h1>Oops!</h1>
		<p>{message}</p>
		<Link to='/'>Go to Home</Link>
	</div>
}
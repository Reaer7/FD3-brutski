import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export function ErrorPage() {
    return <div key={uuidv4()} id="error-page">
        <h1>Oops!</h1>
        <p>Page not found</p>
        <Link to='/start'>Go to Home</Link>
    </div>
}
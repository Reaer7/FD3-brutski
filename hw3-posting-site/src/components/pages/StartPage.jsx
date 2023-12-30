import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { getRandInt } from "../../utils/random";
import '../App.css';

export function StartPage() {
	const randomPostId = getRandInt(1, 100);
	return <>
		<h3>This is Start Page!</h3>
		<Link key={uuidv4()} className="post-link" to={"/post/" + randomPostId}>
			<span>Random post</span>
		</Link>
	</>
}
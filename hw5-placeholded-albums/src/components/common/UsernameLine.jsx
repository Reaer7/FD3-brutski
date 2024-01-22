import { Link } from "react-router-dom";

/**
 * @param {{ id: number, name: string, username: string, email: string, }} user
 * @returns
 */
export function UsernameLine(user) {
	return <div className="line">
		<Link className="link" to={`/users/${user.id}`}>
			{user.username}
		</Link>
	</div>;
}
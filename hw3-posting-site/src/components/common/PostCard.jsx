import { Link } from "react-router-dom";

/**
 * @param {{ id: number, userId: number, title: string, body: string }} post
 * @returns
 */
export function PostCard(post) {
	return <>
		<div className="post-card">
			<Link className="post-link" to={`/post/${post.id}`}>
				<div className="post-card__title">{post.title}</div>
			</Link>
			<div className="post-card__body">{post.body}</div>
		</div>
	</>
}
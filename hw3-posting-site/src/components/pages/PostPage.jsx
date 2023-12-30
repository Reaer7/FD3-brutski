import { useParams } from "react-router-dom";
import { loadPost } from "../../api/jsonplaceholder";
import { useLoad } from "../../hooks/useLoad";
import { Spinner } from "../common/Spinner";

export function PostPage() {
	const params = useParams();
	const postId = params.id;

	const { data: post, isLoading } = useLoad(() => loadPost(postId));

	return <>
		<h3>postId: {postId}</h3>
		{isLoading
			? <Spinner />
			: (!!post.id)
				? <div>
					<h4 className="post-card__title">{post.title}</h4>
					<div className="post-card__body">{post.body}</div>
				</div>
				: <div>There is no post with this <u><i>postId</i></u> <b>!</b></div>
		}
	</>
}
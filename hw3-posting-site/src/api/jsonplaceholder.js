const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function loadPost(postId) {
	const res = await fetch(`${BASE_URL}/posts/${postId}`);
	return res.json();
}

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function loadAlbums() {
	const res = await fetch(`${BASE_URL}/albums`);
	return res.json();
}

export async function loadAlbum(albumId) {
	const res = await fetch(`${BASE_URL}/albums/${albumId}`);
	return res.json();
}

export async function loadUsers() {
	const res = await fetch(`${BASE_URL}/users`);
	return res.json();
}

export async function loadUser(userId) {
	const res = await fetch(`${BASE_URL}/users/${userId}`);
	return res.json();
}
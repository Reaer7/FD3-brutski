const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function loadAlbums(userId) {
	let res;
	if (!!userId) {
		res = await fetch(`${BASE_URL}/albums`);
	} else {
		res = await fetch(`${BASE_URL}/albums?userId=${userId}`);
	}
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

export async function loadPhotos(albumId, limit) {
	let res;
	if (!albumId || !limit) {
		res = await fetch(`${BASE_URL}/photos`);
	} else {
		res = await fetch(`${BASE_URL}/photos?albumId=${albumId}&_limit=${limit}`);
	}
	return res.json();
}

export async function loadPhoto(photoId) {
	console.log("load photo with id: ", photoId)
	const res = await fetch(`${BASE_URL}/photos/${photoId}`);
	return res.json();
}

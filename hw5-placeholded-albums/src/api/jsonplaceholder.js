const BASE_URL = "https://jsonplaceholder.typicode.com";

// TODO: for random start
// const MIN_PHOTO_ID = 1;
// const MAX_PHOTO_ID = 5000;

export async function loadAlbums(userId) {
	let res;
	if (!userId) {
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
		// TODO: add random start
		// const start = getRandInt(MIN_PHOTO_ID, MAX_PHOTO_ID - limit);
		// res = await fetch(`${BASE_URL}/photos?albumId=${albumId}&_start=${start}&_limit=${limit}`);
		res = await fetch(`${BASE_URL}/photos?albumId=${albumId}&_limit=${limit}`);
	}
	return res.json();
}

export async function loadPhoto(photoId) {
	const res = await fetch(`${BASE_URL}/photos/${photoId}`);
	return res.json();
}

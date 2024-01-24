import { useEffect, useState } from "react";
import { loadAlbum, loadPhoto, loadPhotos, loadUser } from "../../api/jsonplaceholder";
import { useLoad } from "../../hooks/useLoad";
import { getRandInt } from "../../utils/random";
import { Spinner } from "../common/Spinner";

const MIN_PHOTO_ID = 1;
const MAX_PHOTO_ID = 5000;
const SAME_ALBUM_NUMBER = 6;

/**
 * @param {{ id: number, title: string, userId: number }} album
 * @returns
 */
function FigCaptionDisplay(album) {
	const { data, isLoading } = useLoad(loadUser(album.userId));

	// console.log("data", data);

	return <>
		{isLoading
			? <Spinner />
			: <div>
				<span>from {album.title} by {data?.username}</span>
			</div>
		}
	</>
}

/**
 * @param {{ id: number, title: string, url: string, thumbnailUrl: string, albumId: number }} photo
 * @returns
 */
function PhotoDisplay(photo) {
	const { data, isLoading } = useLoad(loadAlbum(photo.albumId));

	// console.log("data", data);

	return <>
		<h4>{photo.title}</h4>
		<div>
			<img src={photo.url}
				 alt="photo"
				 border="1 px gray solid" />
		</div>
		{isLoading
			? <Spinner />
			: <FigCaptionDisplay {...data} />
		}
	</>
}

/**
 * @param {{ id: number, title: string, url: string, thumbnailUrl: string, albumId: number }} photo
 * @returns
 */
function SameAlbumPhotos(photo) {
	const { data, isLoading } = useLoad(loadPhotos(photo.albumId, SAME_ALBUM_NUMBER));

	// console.log("data", data);

	return <>
		<h4>Other from same album:</h4>
		{isLoading
			? <Spinner />
			: <div key="same photos">
				{data.map(onePhoto => <div key={onePhoto.url}>
					<img src={onePhoto.thumbnailUrl}
						 alt="album little photo"
						 border="1px blue solid"
					/>
					<div>{onePhoto.title}</div>
				</div>)}
			</div>
		}
	</>
}

export function RandomPhotoPage() {
	const [randPhotoId, setRandPhotoId] = useState(0);
	console.log("init randPhotoId", randPhotoId);

	useEffect(() => {
		setRandPhotoId(getRandInt(MIN_PHOTO_ID, MAX_PHOTO_ID));
	}, []);

	// const { data, isLoading } = useLoad(loadPhoto(randPhotoId));

	return <>
		<h3>This is random Photo Page!</h3>
		{/*{isLoading*/}
		{/*	? <Spinner />*/}
		{/*	:*/}
			<div>
				{/*<PhotoDisplay {...data} />*/}
				{/*<SameAlbumPhotos {...data} />*/}
			</div>
		{/*}*/}
		<div>Random Photo Id: {randPhotoId}</div>
	</>;
}
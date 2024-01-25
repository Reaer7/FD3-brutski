import { Link, useParams } from 'react-router-dom';
import { SameAlbumPhotos } from "../common/SameAlbumPhotos";
import { AlbumDisplay } from "../common/AlbumDisplay";

export function OneAlbumPage() {
	const params = useParams();
	const albumId = params.id;

	return <>
		<div>
			<Link className="icon" to="/albums">
				&#8656; {/*двойная стрелка влево*/}
			</Link>
			<span className="header-text-36">Album</span>
		</div>
		<AlbumDisplay albumId={albumId} />
		<h4>Photos:</h4>
		<SameAlbumPhotos albumId={albumId} />
	</>
}
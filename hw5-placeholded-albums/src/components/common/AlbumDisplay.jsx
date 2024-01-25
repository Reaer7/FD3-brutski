import { useLoad } from "../../hooks/useLoad";
import { Spinner } from "./Spinner";
import { loadAlbum } from "../../api/jsonplaceholder";
import { AlbumWithPhoto } from "./AlbumWithPhoto";
import { Link } from 'react-router-dom';

const INIT_NUMBER = 0;

export function AlbumDisplay({ albumId }) {
	const { data: album, isLoading } = useLoad(
		() => loadAlbum(albumId),
		albumId !== INIT_NUMBER
	);

	return <>
		{isLoading
			? <Spinner/>
			: <div className="left">
				<h4>{album.title}</h4>
				<Link className="link" to={`/users/${album.userId}`}>(open author page)</Link>
				<AlbumWithPhoto albumId={albumId} />
			</div>
		}
	</>
}
import { useLoad } from "../../hooks/useLoad";
import { Spinner } from "./Spinner";
import { loadAlbums } from "../../api/jsonplaceholder";
import { AlbumWithPhotoAndTitle } from "./AlbumWithPhotoAndTitle";

const INIT_NUMBER = 0;

export function SameAlbums({ userId }) {
	const { data: albums, isLoading } = useLoad(
		() => loadAlbums(userId),
		userId !== INIT_NUMBER
	);

	return <>
		<h2>Albums:</h2>
		{isLoading
			? <Spinner />
			: <div key="same photos" className="same-table">
				{albums.map(album => <AlbumWithPhotoAndTitle
					key={album.id + album.title}
					album={album}
				/>)}
			</div>
		}
	</>
}
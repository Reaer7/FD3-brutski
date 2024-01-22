import { loadAlbums } from "../../api/jsonplaceholder";
import { useLoad } from "../../hooks/useLoad";
import { Spinner } from "../common/Spinner";
import { AlbumCard } from "../common/AlbumCard";

export function AlbumsPage() {
	const { data, isLoading } = useLoad(loadAlbums);

	return <>
		<h3>This is Albums Page!</h3>
		{isLoading
			? <Spinner />
			: <div className="list">
				{data.map(album => <AlbumCard
					key={album.id}
					{...album}
				/>)}
			</div>
		}
	</>
}
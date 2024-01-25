import { useLoad } from "../../hooks/useLoad";
import { Spinner } from "./Spinner";
import { loadPhotos } from "../../api/jsonplaceholder";
import { LittleCard } from "./LittleCard";

const INIT_NUMBER = 0;
const SAME_ALBUM_NUMBER = 6;

export function SameAlbumPhotos({ albumId }) {
	const { data: photos, isLoading } = useLoad(
		() => loadPhotos(albumId, SAME_ALBUM_NUMBER),
		albumId !== INIT_NUMBER
	);

	return <>
		{isLoading
			? <Spinner />
			: <div key="same photos" className="same-table">
				{photos.map(photo => <LittleCard key={photo.url}
													thumbnailUrl={photo.thumbnailUrl}
													url={photo.url}
													title={photo.title}
				/>)}
			</div>
		}
	</>
}
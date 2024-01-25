import { useLoad } from "../../hooks/useLoad";
import { Spinner } from "./Spinner";
import { loadPhotos } from "../../api/jsonplaceholder";
import { LittleCard } from "./LittleCard";

const INIT_NUMBER = 0;
const SAME_ALBUM_NUMBER = 6;

/**
 * @param {{ id: number, title: string, url: string, thumbnailUrl: string, albumId: number }} photo
 * @returns
 */
export function SameAlbumPhotos(photo) {
	const { data: photos, isLoading } = useLoad(
		() => loadPhotos(photo.albumId, SAME_ALBUM_NUMBER),
		photo.albumId !== INIT_NUMBER
	);

	return <>
		<h4>Other from same album:</h4>
		{isLoading
			? <Spinner />
			: <div key="same photos" className="same-table">
				{photos.map(onePhoto => <LittleCard key={onePhoto.url}
											  thumbnailUrl={onePhoto.thumbnailUrl}
											  title={onePhoto.title}
				/>)}
			</div>
		}
	</>
}
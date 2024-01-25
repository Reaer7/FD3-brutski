import { useLoad } from "../../hooks/useLoad";
import { Spinner } from "./Spinner";
import { loadAlbums } from "../../api/jsonplaceholder";
import { LittleCard } from "./LittleCard";

export function SameAlbums(userId) {
	const { data: albums, isLoading } = useLoad(
		() => loadAlbums(userId),
		!!userId
	);

	return <>
		<h2>Albums:</h2>
		{isLoading
			? <Spinner />
			: <div key="same photos" className="same-table">
				{albums.map(oneAlbum => <LittleCard key={oneAlbum.url}
											  thumbnailUrl={oneAlbum.thumbnailUrl}
											  title={oneAlbum.title}
				/>)}
			</div>
		}
	</>
}
import { loadAlbums } from "../../api/jsonplaceholder";
import { useLoad } from "../../hooks/useLoad";
import { Spinner } from "../common/Spinner";
import { LittleCard } from "../common/LittleCard";

export function AlbumsPage() {
	const { data, isLoading } = useLoad(loadAlbums);

	return <>
		<h3>This is Albums Page!</h3>
		{isLoading
			? <Spinner />
			: <div className="list">
				{data.map(album => <LittleCard
					key={album.id}
					{...album}
				/>)}
			</div>
		}
	</>
}
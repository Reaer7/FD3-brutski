import { useLoad } from "../../hooks/useLoad";
import { Spinner } from "./Spinner";
import { loadAlbum } from "../../api/jsonplaceholder";
import { FigCaptionDisplay } from "./FigCaptionDisplay";

const INIT_NUMBER = 0;

/**
 * @param {{ id: number, title: string, url: string, thumbnailUrl: string, albumId: number }} photo
 * @returns
 */
export function PhotoDisplay(photo) {
	const { data: album, isLoading } = useLoad(
		() => loadAlbum(photo.albumId),
		photo.albumId !== INIT_NUMBER
	);

	return <div className="left">
		<h4>{photo.title}</h4>
		{isLoading
			? <Spinner/>
			: <div>
				<img className="big-photo"
					 src={photo.url}
					 alt="random big photo"
					 border="1 px gray solid"/>
				<FigCaptionDisplay {...album} />
			</div>
		}
	</div>
}
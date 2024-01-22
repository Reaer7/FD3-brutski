import { Link } from "react-router-dom";

/**
 * @param {{ id: number, title: string, userId: number }} album
 * @returns
 */
export function AlbumCard(album) {
	return <div className="card">
		<Link className="link" to={`/albums/${album.id}`}>
			<div className="card__title">{album.title}</div>
		</Link>
	</div>;
}
import { loadAlbums } from "../../api/jsonplaceholder";
import { useLoad } from "../../hooks/useLoad";
import { Spinner } from "../common/Spinner";
import { AlbumWithPhotoAndTitle } from "../common/AlbumWithPhotoAndTitle";

export function AlbumsPage() {
    const { data: albums, isLoading } = useLoad(loadAlbums, true);

    return <>
        <h3>Albums</h3>
        {isLoading
            ? <Spinner/>
            : <div className="list">
                {albums.map(album => <AlbumWithPhotoAndTitle
                    key={album.id + album.title}
                    album={album}
                />)}
            </div>
        }
    </>
}
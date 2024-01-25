import { useLoad } from "../../hooks/useLoad";
import { loadPhotos } from "../../api/jsonplaceholder";
import { Spinner } from "./Spinner";
import { Link } from "react-router-dom";
import { LittleCard } from "../common/LittleCard";

const INIT_NUMBER = 0;

/**
 * @param {{ id: number, title: string, userId: number }} album
 * @returns
 */
export function AlbumWithPhotoAndTitle({ album }) {
    const { data: photo, isLoading } = useLoad(
        () => loadPhotos(album.id, 1),
        album.id !== INIT_NUMBER
    );

    return <>
        {isLoading
            ? <Spinner/>
            : <Link className="link" to={`/albums/${album.id}`}>
                <LittleCard
                    key={album.id + album.title}
                    thumbnailUrl={photo[0]?.thumbnailUrl}
                    title={album.title}
                />
            </Link>
        }
    </>
}
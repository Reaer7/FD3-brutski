import { useLoad } from "../../hooks/useLoad";
import { loadPhotos } from "../../api/jsonplaceholder";
import { Spinner } from "./Spinner";

const INIT_NUMBER = 0;

export function AlbumWithPhoto({ albumId }) {
    const { data: photo, isLoading } = useLoad(
        () => loadPhotos(albumId, 1),
        albumId !== INIT_NUMBER
    );

    return <>
        {isLoading
            ? <Spinner/>
            : <img className="big-photo"
                   src={photo[0]?.url}
                   alt="random big photo"
                   border="1 px gray solid"/>
        }
    </>
}
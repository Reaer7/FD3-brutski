import { useLoad } from "../../hooks/useLoad";
import { loadUser } from "../../api/jsonplaceholder";
import { Spinner } from "./Spinner";
import { Link } from "react-router-dom";

const INIT_NUMBER = 0;

/**
 * @param {{ id: number, title: string, userId: number }} album
 * @returns
 */
export function FigCaptionDisplay(album) {
    const { data: user, isLoading } = useLoad(
        () => loadUser(album.userId),
        album.userId !== INIT_NUMBER
    );

    return <div className="left">
        {isLoading
            ? <Spinner/>
            : <div>
                from
                &#8195; {/*длинный пробел*/}
                <Link to={`/albums/${album.id}`}>{album.title}</Link>
                &#8195;
                by
                &#8195;
                <Link to={`/users/${user.id}`}>{user.username}</Link>
            </div>
        }
    </div>
}
import { useEffect, useState } from "react";
import { loadPhoto } from "../../api/jsonplaceholder";
import { useLoad } from "../../hooks/useLoad";
import { getRandInt } from "../../utils/random";
import { Spinner } from "../common/Spinner";
import { PhotoDisplay } from "../common/PhotoDisplay";
import { SameAlbumPhotos } from "../common/SameAlbumPhotos";

const INIT_NUMBER = 0;
const MIN_PHOTO_ID = 1;
const MAX_PHOTO_ID = 5000;

export function RandomPhotoPage() {
    const [randPhotoId, setRandPhotoId] = useState(INIT_NUMBER);

    useEffect(() => {
        setRandPhotoId(getRandInt(MIN_PHOTO_ID, MAX_PHOTO_ID));
    }, []);

    const { data: photo, isLoading } = useLoad(
        () => loadPhoto(randPhotoId),
        randPhotoId !== INIT_NUMBER
    );

    return <>
        <h3>Random Photo</h3>
        {isLoading
            ? <Spinner/>
            : <div>
                <PhotoDisplay {...photo} />
                <h4>Other from same album:</h4>
                <SameAlbumPhotos albumId={photo.albumId} />
            </div>
        }
    </>
}
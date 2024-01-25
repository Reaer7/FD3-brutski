import { Link, useNavigate, useParams } from 'react-router-dom';
import { UserInfo } from "../common/UserInfo";
import { SameAlbums } from "../common/SameAlbums";

export function OneUserPage() {
	const navigate = useNavigate();
	const params = useParams();
	const userId = params.id;

	return <>
		<div>
			<Link className="icon" onClick={() => navigate(-1)}>
				&#8656; {/*двойная стрелка влево*/}
			</Link>
			<span className="header-text-36">This is one User Page!</span>
		</div>
		<UserInfo userId={userId} />
		<SameAlbums userId={userId}/>
	</>
}
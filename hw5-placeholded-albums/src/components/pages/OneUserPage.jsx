import { Link, useNavigate } from 'react-router-dom';

export function OneUserPage() {
	const navigate = useNavigate();

	return <>
		<span>
			<Link onClick={() => navigate(-1)}>&#8656;</Link>
			<h3>This is one User Page!</h3>
		</span>
	</>
}
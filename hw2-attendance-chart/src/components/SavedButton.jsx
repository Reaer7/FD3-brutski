import { useEffect, useState } from "react";

const LOADING_TIME_MS = 2000;

export function SavedButton({ data }) {
	const [isClicked, setIsClick] = useState(false);

	useEffect(() => {
		if (isClicked) {

			setTimeout(() => {
				data.forEach((keyValue) => localStorage.setItem(
					keyValue.key,
					JSON.stringify(keyValue?.value)
				));
				setIsClick((prevState) => !prevState);
			}, LOADING_TIME_MS);
		}
	}, [isClicked]);

	return <button
		className="wideButton"
		onClick={() => setIsClick((prevState) => !prevState)}
		disabled={isClicked}
	>
		{isClicked ? 'Saving in progress' : 'Save'}
	</button>
}

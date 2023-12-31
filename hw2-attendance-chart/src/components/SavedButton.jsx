import { useEffect, useState } from "react";

const LOADING_TIME_MS = 2000;

export function SavedButton({ data }) {
	const [isClicked, setIsClick] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);
	const [text, setText] = useState("Save");

	useEffect(() => {
		if (isClicked) {
			setIsLoading(!isLoading);
			setIsDisabled(true);
			setText("Saving in progress");

			setTimeout(() => {
				data.forEach((keyValue) => localStorage.setItem(
					keyValue.key,
					JSON.stringify(keyValue?.value)
				));
				setIsClick(!isClicked);
				setIsLoading(!isLoading);
				setIsDisabled(false);
				setText("Save");
			}, LOADING_TIME_MS);
		}
	}, [isClicked]);

	return <button
		className="wideButton"
		onClick={() => setIsClick(!isClicked)}
		disabled={isDisabled}
	>
		{text}
	</button>
}

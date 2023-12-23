import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const EMPTY_STRING = "";
const PRESENTED_KEY = "X";

export default function AttendanceCell({ changeAttendance }) {
	const [isClicked, setIsClick] = useState(false);
	const [text, setText] = useState(EMPTY_STRING);

	useEffect(() => {
		if (isClicked) {
			setText(PRESENTED_KEY);
		} else {
			setText(EMPTY_STRING);
		}
		changeAttendance();
	}, [isClicked]);

	return <div
		key={uuidv4()}
		className="cell clickable"
		onClick={() => setIsClick(!isClicked)}
	>
		{text}
	</div>
}
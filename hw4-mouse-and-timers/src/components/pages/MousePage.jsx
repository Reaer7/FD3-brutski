import { useEffect, useState } from "react";
import '../App.css';

const INITIAL_CURSOR_STATE = 0;
const OUT_OF_BOUND_CONTENT_MESSAGE = "Out of bound content";

export function MousePage() {
	const [isOutOfBound, setIsOutOfBound] = useState(false);
	const [offsetX, setOffsetX] = useState(INITIAL_CURSOR_STATE);
	const [offsetY, setOffsetY] = useState(INITIAL_CURSOR_STATE);

	useEffect(() => {
		if (offsetX === 0 && offsetY === 0) {
			setIsOutOfBound(true);
		}
	}, [offsetX, offsetY]);

	function resetCoordination() {
		setIsOutOfBound(true)
	}

	function initCoordination(e) {
		setOffsetX(e.clientX);
		setOffsetY(e.clientY);
		setIsOutOfBound(false)
	}

	function changeCoordination(e) {
		setOffsetX(e.clientX);
		setOffsetY(e.clientY);
	}

	return <div
		className="mouse-pad"
		onMouseLeave={() => resetCoordination()}
		onMouseEnter={(e) => initCoordination(e)}
		onMouseMove={(e) => changeCoordination(e)}
	>
		<h3>This is Mouse Page!</h3>
		{isOutOfBound
			? <div>{OUT_OF_BOUND_CONTENT_MESSAGE}</div>
			: <div>
				<p>X: {offsetX}</p>
				<p>Y: {offsetY}</p>
			</div>
		}
	</div>
}
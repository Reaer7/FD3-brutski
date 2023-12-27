import { v4 as uuidv4 } from "uuid";

const EMPTY_STRING = "";
const PRESENTED_KEY = "X";

export function AttendanceCell({ attendance, changeAttendance }) {
	return <div
		key={uuidv4()}
		className="cell clickable"
		onClick={changeAttendance}
	>
		{attendance ? PRESENTED_KEY : EMPTY_STRING}
	</div>
}
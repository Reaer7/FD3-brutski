import { v4 as uuidv4 } from "uuid";
import { AttendanceCell } from "./AttendanceCell";

export function StudentCells({ studentAttendances, setStudentAttendances }) {

	function changeAttendance(studentIndex, attendanceIndex) {
		return () => {
			const currentStudentAttendances = studentAttendances[studentIndex].attendance;
			const currentStudentAttendance = currentStudentAttendances[attendanceIndex];

			const changedStudentAttendances = [...studentAttendances];
			changedStudentAttendances[studentIndex].attendance[attendanceIndex] = !currentStudentAttendance;
			setStudentAttendances(changedStudentAttendances);
		}
	}

	return <>
		{studentAttendances.map((studentAttendance, studentIndex) => <div key={uuidv4()} className="row">
			<div key={uuidv4()} className="cell">
				{studentIndex + 1}.{studentAttendance.studentName}
			</div>
			{
				studentAttendance.attendance?.map((attendance, attendanceIndex) => <AttendanceCell
					key={uuidv4()}
					attendance={attendance}
					changeAttendance={changeAttendance(studentIndex, attendanceIndex)}
				/>)
			}
		</div>)}
	</>;
}
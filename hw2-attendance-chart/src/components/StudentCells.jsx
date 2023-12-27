import { v4 as uuidv4 } from "uuid";
import AttendanceCell from "./AttendanceCell";

export default function StudentCells({ studentAttendances, setStudentAttendances }) {

	function changeAttendance(studentIndex, attendanceIndex) {
		return () => {
			const currentStudentAttendances = studentAttendances[studentIndex].attendance;
			console.log("currentStudentAttendances", currentStudentAttendances);

			const currentStudentAttendance = currentStudentAttendances[attendanceIndex];
			const newStudentAttendance = !currentStudentAttendance;

			const newStudentAttendances = [...currentStudentAttendances];
			newStudentAttendances[attendanceIndex] = newStudentAttendance;

			const changedStudentAttendances = [...studentAttendances];

			changedStudentAttendances[studentIndex].attendance = newStudentAttendances;
			// setStudentAttendances(changedStudentAttendances);

			console.log("changedStudentAttendances", changedStudentAttendances[studentIndex].attendance);
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
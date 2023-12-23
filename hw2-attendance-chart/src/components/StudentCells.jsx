import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AttendanceCell from "./AttendanceCell";

export default function StudentCells({ studentNames, dateLength }) {
	const initStudentAttendances = studentNames.map(studentName => ({
		studentName: studentName,
		attendance: Array(dateLength).fill(false)
	}));

	const [studentAttendances, setStudentAttendances] = useState(initStudentAttendances);

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
				studentAttendance.attendance?.map((_attendance, attendanceIndex) => <AttendanceCell
					key={uuidv4()}
					changeAttendance={changeAttendance(studentIndex, attendanceIndex)}
				/>)
			}
		</div>)}
	</>;
}
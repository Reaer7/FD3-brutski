import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { DateCells } from "./components/DateCells";
import { NewDateButton } from "./components/NewDateButton";
import { NewStudentButton } from "./components/NewStudentButton";
import { SavedButton } from "./components/SavedButton";
import { StudentCells } from "./components/StudentCells";

const INITIAL_STUDENT_NAMES = ["Samuel", "Noah", "Daniel"];
const INITIAL_DATES = ["2023-12-09", "2023-12-16", "2023-12-23"];
const STUDENT_ATTENDANCES_KEY = "studentAttendances";
const DATES_KEY = "dates";

export function App() {
  const [studentNames, setStudentNames] = useState(INITIAL_STUDENT_NAMES);
  const [dates, setDates] = useState(
      JSON.parse(localStorage.getItem(DATES_KEY))
      ?? INITIAL_DATES
  );

  const initStudentAttendances = studentNames.map(studentName => ({
    studentName: studentName,
    attendance: Array(dates.length).fill(false)
  }));

  const [studentAttendances, setStudentAttendances] = useState(
      JSON.parse(localStorage.getItem(STUDENT_ATTENDANCES_KEY))
      ?? initStudentAttendances
  );

  function addNewStudent(newStudentName) {
    setStudentNames([...studentNames, newStudentName]);
    studentAttendances.push({
      studentName: newStudentName,
      attendance: Array(dates.length).fill(false)
    });
  }

  function addNewDate(newDate) {
    setDates([...dates, newDate]);
    studentAttendances.forEach(studentAttendance => {
      studentAttendance.attendance.push(false);
    });
  }

  return <div key={uuidv4()} className="App">
    <header key={uuidv4()} className="App-header">
      <img key={uuidv4()} src="/logo.svg" className="App-logo" alt="logo" />
    </header>
    <hr />

    <div className="content">
      <h2>Attendance chart</h2>

      <div>
        <DateCells dates={dates} />
        <StudentCells studentAttendances={studentAttendances} setStudentAttendances={setStudentAttendances} />
        <SavedButton
            data={[
              {
                key: STUDENT_ATTENDANCES_KEY,
                value: studentAttendances
              },
              {
                key: DATES_KEY,
                value: dates
              }
            ]}
        />
      </div>

      <NewStudentButton addNewStudent={addNewStudent} />
      <NewDateButton addNewDate={addNewDate} />
    </div>

  </div>;
}
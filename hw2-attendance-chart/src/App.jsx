import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import DateCells from "./components/DateCells";
import NewDateButton from "./components/NewDateButton";
import NewStudentButton from "./components/NewStudentButton";
import StudentCells from "./components/StudentCells";

const INITIAL_STUDENT_NAMES = ["Samuel", "Noah", "Daniel"];
const INITIAL_DATES = ["2023-12-09", "2023-12-16", "2023-12-23"];

export default function App() {
  const [studentNames, setStudentNames] = useState(INITIAL_STUDENT_NAMES);
  const [dates, setDates] = useState(INITIAL_DATES);

  function addNewStudent(newStudent) {
    setStudentNames([...studentNames, newStudent]);
  }

  function addNewDate(newDate) {
    setDates([...dates, newDate]);
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
        <StudentCells studentNames={studentNames} dateLength={dates.length} />
      </div>

      {/*TODO: change to save*/}
      <button onClick={() => {
        console.log("dates", dates)
        console.log("studentNames", studentNames)
      }}>
        Logs
      </button>

      <NewStudentButton addNewStudent={addNewStudent} />
      <NewDateButton addNewDate={addNewDate} />
    </div>

  </div>;
}
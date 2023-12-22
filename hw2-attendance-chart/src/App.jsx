import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import NewDateButton from "./components/NewDateButton";
import NewStudentButton from "./components/NewStudentButton";

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
      <button onClick={() => {
        console.log("INITIAL_DATES", dates)
        console.log("INITIAL_STUDENT_NAMES", studentNames)
      }}>Logs
      </button>

      <NewStudentButton addNewStudent={addNewStudent} />
      <NewDateButton addNewDate={addNewDate} />
    </div>

  </div>
}
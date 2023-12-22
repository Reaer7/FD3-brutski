export default function NewStudentButton(props) {
	return <button
		className="wideButton"
		onClick={() => props.addNewStudent(prompt("Enter new student name"))}
	>
		Add student
	</button>
}

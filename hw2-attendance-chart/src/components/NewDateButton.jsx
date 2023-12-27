export function NewDateButton(props) {
	return <button
		className="wideButton"
		onClick={() => props.addNewDate(prompt("Enter new date"))}
	>
		Add date
	</button>
}

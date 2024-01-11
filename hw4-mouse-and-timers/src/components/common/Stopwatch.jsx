export function Stopwatch(props) {
	return <div className="timer">
		<div>{props.name}</div>
		<div>{props.num}</div>
	</div>
}
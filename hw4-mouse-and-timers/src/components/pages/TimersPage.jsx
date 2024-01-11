import { useEffect, useState } from "react";
import '../App.css';
import { Stopwatch } from "../common/Stopwatch";

const INITIAL_TIMER_INTERVAL_MS = 1000;
const INITIAL_NUMBER = 0;
const STEP_NUMBER = 1;

export function TimersPage(props) {
	const [timer1Interval, setTimer1Interval] = useState(INITIAL_TIMER_INTERVAL_MS);
	const [num1, setNum1] = useState(INITIAL_NUMBER);
	const [timer1Id, setTimer1Id] = useState(null);
	const [timer2Id, setTimer2Id] = useState(null);

	useEffect(() => {
		const timerId = setInterval(() => {
			setNum1(num1 + STEP_NUMBER);
		}, timer1Interval);

		setTimer1Id(timerId);

		return () => {
			clearInterval(timerId);
		};
	}, [num1]);

	useEffect(() => {
		const timerId = setInterval(() => {
			props.setNum2(props.num2 + STEP_NUMBER);
		}, props.timer2Interval);

		setTimer2Id(timerId);

		return () => {
			clearInterval(timerId);
		};
	}, [props.num2]);

	useEffect(() => {
		if (props.num3 === INITIAL_NUMBER) {
			props.setTimerStart(true);
		}
	}, [props.num3]);

	function slowerButtonHandler() {
		setTimer1Interval(timer1Interval * 2);
		props.setTimer2Interval(props.timer2Interval * 2);
		props.setTimer3Interval(props.timer3Interval * 2);
	}

	function fasterButtonHandler() {
		setTimer1Interval(timer1Interval / 2);
		props.setTimer2Interval(props.timer2Interval / 2);
		props.setTimer3Interval(props.timer3Interval / 2);
	}

	function resetButtonHandler() {
		setNum1(INITIAL_NUMBER);
		clearInterval(timer1Id);
		setTimer1Interval(INITIAL_TIMER_INTERVAL_MS);

		props.setNum2(INITIAL_NUMBER);
		clearInterval(timer2Id);
		props.setTimer2Interval(INITIAL_TIMER_INTERVAL_MS);

		props.resetTimer3();
	}

	return <>
		<h3>This is Timers Page!</h3>
		<div className="timer-config">
			<button onClick={slowerButtonHandler}>Slower</button>
			<button onClick={fasterButtonHandler}>Faster</button>
			<button onClick={resetButtonHandler}>Reset</button>
		</div>
		<div className="timer-display">
			<Stopwatch name="Timer 1" num={num1} />
			<Stopwatch name="Timer 2" num={props.num2} />
			<Stopwatch name="Timer 3" num={props.num3} />
		</div>
	</>
}
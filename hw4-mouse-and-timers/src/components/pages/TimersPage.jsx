import { useEffect, useState } from "react";
import '../App.css';

const INITIAL_TIMER_INTERVAL_MS = 1000;
const INITIAL_NUMBER = 0;
const STEP_NUMBER = 1;

export function TimersPage() {
	const [timer1Interval, setTimer1Interval] = useState(INITIAL_TIMER_INTERVAL_MS);
	const [timer2Interval, setTimer2Interval] = useState(INITIAL_TIMER_INTERVAL_MS);
	const [timer3Interval, setTimer3Interval] = useState(INITIAL_TIMER_INTERVAL_MS);
	const [num1, setNum1] = useState(INITIAL_NUMBER);
	const [num2, setNum2] = useState(INITIAL_NUMBER);
	const [num3, setNum3] = useState(INITIAL_NUMBER);
	const [timer1Id, setTimer1Id] = useState(null);
	const [timer2Id, setTimer2Id] = useState(null);
	const [timer3Id, setTimer3Id] = useState(null);

	useEffect(() => {
		const timer1Id = setInterval(() => {
			setNum1(num1 + STEP_NUMBER);
		}, timer1Interval);
		const timer2Id = setInterval(() => {
			setNum2(num2 + STEP_NUMBER);
		}, timer2Interval);
		const timer3Id = setInterval(() => {
			setNum3(num3 + STEP_NUMBER);
		}, timer3Interval);

		setTimer1Id(timer1Id);
		setTimer2Id(timer2Id);
		setTimer3Id(timer3Id);

		// unmount - callback function
		return () => {
			clearInterval(timer1Id);
			clearInterval(timer2Id);
			clearInterval(timer3Id);
		};
	}, [num1, num2, num3]);

	function slowerButtonHandler() {
		setTimer1Interval(timer1Interval * 2);
		setTimer2Interval(timer2Interval * 2);
		setTimer3Interval(timer3Interval * 2);
	}

	function fasterButtonHandler() {
		setTimer1Interval(timer1Interval / 2);
		setTimer2Interval(timer2Interval / 2);
		setTimer3Interval(timer3Interval / 2);
	}

	function resetButtonHandler() {
		setNum1(INITIAL_NUMBER);
		setNum2(INITIAL_NUMBER);
		setNum3(INITIAL_NUMBER);

		clearInterval(timer1Id);
		clearInterval(timer2Id);
		clearInterval(timer3Id);

		setTimer1Interval(INITIAL_TIMER_INTERVAL_MS);
		setTimer2Interval(INITIAL_TIMER_INTERVAL_MS);
		setTimer3Interval(INITIAL_TIMER_INTERVAL_MS);
	}

	return <>
		<h3>This is Timers Page!</h3>
		<div className="timer-config">
			<button onClick={slowerButtonHandler}>Slower</button>
			<button onClick={fasterButtonHandler}>Faster</button>
			<button onClick={resetButtonHandler}>Reset</button>
		</div>
		<div className="timer-display">
			<div className="timer">
				<div>Timer 1</div>
				<div>{num3}</div>
			</div>
			<div className="timer">
				<div>Timer 2</div>
				<div>{num2}</div>
			</div>
			<div className="timer">
				<div>Timer 3</div>
				<div>{num3}</div>
			</div>
		</div>
	</>
}
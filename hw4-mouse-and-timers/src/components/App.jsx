import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Content } from "./layout/Content";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { ErrorPage } from "./pages/ErrorPage";
import { MousePage } from "./pages/MousePage";
import { StartPage } from "./pages/StartPage";
import { TimersPage } from "./pages/TimersPage";

const INITIAL_TIMER_INTERVAL_MS = 1000;
const INITIAL_NUMBER = 0;
const STEP_NUMBER = 1;

export function App() {
	const [timer3Interval, setTimer3Interval] = useState(INITIAL_TIMER_INTERVAL_MS);
	const [num3, setNum3] = useState(INITIAL_NUMBER);
	const [timer3Id, setTimer3Id] = useState(null);
	const [timerStart3, setTimerStart] = useState(false);
	const [timer2Interval, setTimer2Interval] = useState(INITIAL_TIMER_INTERVAL_MS);
	const [num2, setNum2] = useState(INITIAL_NUMBER);

	useEffect(() => {
		if (timerStart3) {
			const timerId = setInterval(() => {
				setNum3(num3 + STEP_NUMBER);
			}, timer3Interval);

			setTimer3Id(timerId);
		}

		return () => {
			clearInterval(timer3Id);
		};
	}, [timerStart3, num3]);

	function resetTimer3() {
		setNum3(INITIAL_NUMBER);
		clearInterval(timer3Id);
		setTimer3Interval(INITIAL_TIMER_INTERVAL_MS);
		setTimerStart(false);
	}

	return <div className="App">
		<BrowserRouter>
			<Header />
			<Content>
				<Routes>
					<Route path="*" element={<ErrorPage />} />
					<Route id="root" path="/" element={<Navigate to="/start" />} />
					<Route path="/start" element={<StartPage />} />
					<Route path="/mouse" element={<MousePage />} />
					<Route path="/timers" element={<TimersPage
						num3={num3}
						timer3Interval={timer3Interval}
						setTimer3Interval={setTimer3Interval}
						setTimerStart={setTimerStart}
						resetTimer3={resetTimer3}

						num2={num2}
						setNum2={setNum2}
						timer2Interval={timer2Interval}
						setTimer2Interval={setTimer2Interval}
					/>} />
				</Routes>
			</Content>
			<Footer />
		</BrowserRouter>
	</div>
}

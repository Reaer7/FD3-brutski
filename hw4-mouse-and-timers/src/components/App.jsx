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

function App() {
	return <div className="App">
		<BrowserRouter>
			<Header />
			<Content>
				<Routes>
					<Route path="*" element={<ErrorPage />} />
					<Route id="root" path="/" element={<Navigate to="/start" />} />
					<Route path="/start" element={<StartPage />} />
					<Route path="/mouse" element={<MousePage />} />
					<Route path="/timers" element={<TimersPage />} />
				</Routes>
			</Content>
			<Footer />
		</BrowserRouter>
	</div>
}

export default App;

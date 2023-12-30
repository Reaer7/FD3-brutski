import { Navigate } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Content } from "./layout/Content";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { AboutPage } from "./pages/AboutPage";
import { PostPage } from "./pages/PostPage";
import { StartPage } from "./pages/StartPage";
import { TermsPage } from "./pages/TermsPage";

export function App() {
	return <div className="App">
		<BrowserRouter>
			<Header />
			<Content>
				<Routes>
					<Route id="root" path="/" element={<Navigate to="/start" />} />
					<Route path="/start" element={<StartPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/terms" element={<TermsPage />} />
					<Route path="/post/:id" element={<PostPage />} />
				</Routes>
			</Content>
			<Footer />
		</BrowserRouter>
	</div>
}

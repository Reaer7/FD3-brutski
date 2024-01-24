import { Navigate } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Content } from "./layout/Content";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { AlbumsPage } from "./pages/AlbumsPage";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { OneAlbumPage } from "./pages/OneAlbumPage";
import { OneUserPage } from "./pages/OneUserPage";
import { RandomPhotoPage } from "./pages/RandomPhotoPage";
import { UsersPage } from "./pages/UsersPage";

export function App() {
	return <div className="App">
		<BrowserRouter>
			<Header />
			<Content>
				<Routes>
					<Route path="*" element={
						<Navigate to="/error"
								  state={{ message: 'Page not found!' }}
								  replace={true}
						/>}
					/>
					<Route path="/error" element={<ErrorPage />} />
					<Route id="root" path="/" element={<HomePage />} />
					<Route path="/albums" element={<AlbumsPage />} />
					<Route path="/albums/:id" element={<OneAlbumPage />} />
					<Route path="/users" element={<UsersPage />} />
					<Route path="/users/:id" element={<OneUserPage />} />
					<Route path="/randomPhoto" element={<RandomPhotoPage />} />
				</Routes>
			</Content>
			<Footer />
		</BrowserRouter>
	</div>
}

import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export function useLoad(loadCallback) {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	async function loadAndSet() {
		setIsLoading(true);
		try {
			const result = await loadCallback();
			setData(result);
		} catch (error) {
			navigate('/error', { state: { message: 'Something went wrong with download data!' } });
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		loadAndSet();
	}, []);

	return {
		data,
		isLoading
	}
}
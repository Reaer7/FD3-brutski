import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ErrorPage } from "../components/pages/ErrorPage";

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
            navigate(<ErrorPage message="Something went wrong!"/>);
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
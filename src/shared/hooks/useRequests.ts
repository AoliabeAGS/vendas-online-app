import axios from 'axios';
import { useState } from 'react';

export const useRequests = () => {
    const [loading, setLoading] = useState(false);

    const getRequest = async (url: string) => {
        setLoading(true);
        return await axios
            .get(url)
            .then((result) => {
                setLoading(false);
                return result.data;
            })
            .catch(() => {
                alert('Erro');
            });
    };

    const postRequest = async (url: string, body: any) => {
        setLoading(true);
        return await axios
            .post(url, body)
            .then((result) => {
                setLoading(false);
                return result.data;
            })
            .catch(() => {
                alert('Erro');
            });
    };
    return {
        loading,
        getRequest,
        postRequest,
    };
};

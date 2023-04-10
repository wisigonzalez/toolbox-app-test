import {useEffect, useState} from "react";

import apiProvider from "../providers";
import { API_URL_V2 } from "../constants";

/**
 * Funcion que obtiene los archivos formateados.
 * @param {string} fileName Nombre del archivo a filtrar.
 * @returns {{data: [{fileName: string, text: string, number: number, hex: string}], isLoading: boolean}} 
 * Retorna un objeto con las propiedades data y tambien el isLoading, si no, retorna un array vacio junto al isLoading.
 * */
export const useGetAllFiles = (fileName) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!fileName) {
            const fetchData = async () => {
                try {
                    const response = await apiProvider.get(`${API_URL_V2}/files/data`);
                    setData(response?.data?.data || []);
                    setIsLoading(false);
                } catch (error) {
                    setIsLoading(false);
                }
            };
            fetchData();
        };
    }, [fileName]);

    return { data, isLoading };
};

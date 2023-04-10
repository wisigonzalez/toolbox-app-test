import {useEffect, useState} from "react";

import apiProvider from "../providers";
import { API_URL_V2 } from "../constants";

/**
 * Funcion que obtiene segun el parametro, los archivos formateados.
 * @param {string} fileName Nombre del archivo a filtrar.
 * @returns {{data: [{fileName: string, text: string, number: number, hex: string}]}} 
 * Retorna un objeto con las propiedades data y tambien el isLoading, si no, retorna un array vacio junto al isLoading.
 * */
export const useGetFilteredFiles = (fileName) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let timeoutId = null;
        const isAllowed = !!(fileName && fileName.length > 5 && fileName.includes('csv'));

        if (isAllowed) {
            timeoutId = setTimeout(() => {
                const fetchData = async () => {
                    try {
                        const response = await apiProvider.get(`${API_URL_V2}/files/data?fileName=${fileName}`);
                        setData(response?.data?.data || []);
                    } catch (error) {
                        console.log(error);
                    }
                };
                fetchData();
            }, 1000);
        }

        return () => clearTimeout(timeoutId);
    }, [fileName]);

    return { data };
  };
import {useEffect, useState} from "react";

import apiProvider from "../providers";
import { API_URL_V1 } from "../constants";

/**
 * Funcion que obtiene los archivos formateados segun el parametro enviado.
 * @param {string} fileName
 * @returns {{data: {fileName: string, text: string, number: number, hex: string}}}
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
                        const response = await apiProvider.get(`${API_URL_V1}/files/data?fileName=${fileName}`);
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
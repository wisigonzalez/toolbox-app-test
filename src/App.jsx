import React, {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';

import './App.css';
import apiProvider from "./providers";
import { API_URL_V1 } from "./constants";
import { Input } from "./components/atoms/Input";
import { Header, Footer } from "./components/organisms";
import { CustomTable } from "./components/molecules/CustomTable";

const App = () => {
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [pending, setPending] = useState(false)

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }; 

    const getAllFiles = async () => {
        try {
            setPending(true);
            const response = await apiProvider.get(`${API_URL_V1}/files/data`);
            setData(response?.data?.data || []);
            setPending(false);
        } catch (error) {
            console.log(error);
        }
    };

    const getAllFilteredFiles = async () => {
        try {
            const response = await apiProvider.get(`${API_URL_V1}/files/data?fileName=${inputValue}`);
            setData(response?.data?.data || []);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        let timeoutId = null;
        if (!inputValue){
            getAllFiles();
        } else if (inputValue.length > 5) {
            timeoutId = setTimeout(() => {
                getAllFilteredFiles();
            }, 1000);
        }

        return () => clearTimeout(timeoutId);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [inputValue]);

    return (
        <>
            <Header text='Toolbox App' />
            <Container fluid>
                <Input
                    isPending={pending}
                    valueOfInput={inputValue} 
                    textOfInput='Aqui puedes filtrar los archivos' 
                    placeholderOfInput='Ingresa el nombre del archivo (Ej: test0.csv)' 
                    handleInput={handleInputChange}
                />
                <CustomTable data={data}/>
                <hr/>
                <Footer text='©Copyrigth Luis González 2023. Todos los derechos reservados - Powered by Wisi.' />
            </Container>
        </>
    );
};

export { App };

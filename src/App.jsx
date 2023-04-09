import Container from 'react-bootstrap/Container';
import React, {useEffect, useState} from "react";

import './App.css';
import { Input } from "./components/atoms/Input";
import { Header, Footer } from "./components/organisms";
import { CustomTable } from "./components/molecules/CustomTable";
import { useGetAllFiles, useGetAllFilteredFiles, } from "./hooks";

const App = () => {
    const [files, setFiles] = useState('');
    const [inputValue, setInputValue] = useState('');

    const { data: allFiles, isLoading } = useGetAllFiles(inputValue);
    const { data: allFilteredFiles } = useGetAllFilteredFiles(inputValue);
    

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }; 

    useEffect(() => { 
        if (!inputValue) {
            setFiles(allFiles); 
        }
    }, [allFiles, inputValue]);

    useEffect(() => {
        const isAllowed = !!(inputValue && inputValue.length > 5 && inputValue.includes('csv'));

        if(isAllowed) {
            setFiles(allFilteredFiles);
        }
    }, [allFilteredFiles, inputValue]);

    return (
        <>
            <Header text='Toolbox App' />
            <Container fluid>
                <Input
                    isPending={isLoading}
                    valueOfInput={inputValue} 
                    textOfInput='Aqui puedes filtrar los archivos' 
                    placeholderOfInput='Ingresa el nombre del archivo (Ej: test0.csv)' 
                    handleInput={handleInputChange}
                />
                <CustomTable data={files}/>
                <hr/>
                <Footer text='©Copyrigth Luis González 2023. Todos los derechos reservados - Powered by Wisi.' />
            </Container>
        </>
    );
};

export { App };

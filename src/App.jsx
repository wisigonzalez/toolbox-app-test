import React, {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';

import './App.css';
import apiProvider from "./providers";
import { API_URL_V1 } from "./constants";
import { Header, Footer } from "./components/organisms";
import { CustomTable } from "./components/molecules/CustomTable";

const App = () => {
    const [data, setData] = useState([]);
    const getAllFiles = async () => {
        try {
            const response = await apiProvider.get(`${API_URL_V1}/files/data`);
            setData(response?.data?.data || []);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllFiles();
      }, []);

    return (
        <>
            <Header text='Toolbox App' />
            <Container fluid>
                <CustomTable data={data}/>
                <hr/>
                <Footer text='©Copyrigth Luis González 2023. Todos los derechos reservados - Powered by Wisi.' />
            </Container>
        </>
    );
};

export { App };

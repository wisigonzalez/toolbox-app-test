import React from "react";
import Container from 'react-bootstrap/Container';

import './App.css';
import { Header, Footer } from "./components/organisms";
import { CustomTable } from "./components/molecules/CustomTable";

const App = () => {
    return (
        <>
            <Header text='Toolbox App' />
            <Container className="p-3">
                <CustomTable />
                <hr/>
                <Footer text='©Copyrigth Luis González 2023. Todos los derechos reservados - Powered by Wisi.' />
            </Container>
        </>
    );
};

export { App };

import React from "react";
import {Row, Col, FormLabel, FormControl} from 'react-bootstrap';

/**
 * Componente input que maneja un valor y un label.
 * @param {{isPending: boolean, valueOfInput: string, textOfInput: string, placeholderOfInput: string, handleInput: function}} props Propiedades.
 * @returns {jsx} Retorna un elemento JSX (Input) con la clase input y las propiedades enviadas.
 */
const Input = (props) => {
    const {
        isPending,
        valueOfInput, 
        textOfInput, 
        placeholderOfInput, 
        handleInput
    } = props;

    return (
        <Row data-testid="input" className="input">
            <Col xs={12} md={5} lg={5}>
                <FormLabel data-testid="input-label" className="label" >{textOfInput}</FormLabel>
                <FormControl data-testid="input-control" disabled={isPending} type="text" value={valueOfInput} placeholder={placeholderOfInput} onChange={handleInput} />
            </Col>
        </Row>
    )
};

export { Input };

import React from "react";
import {Row, Col, FormLabel, FormControl} from 'react-bootstrap';

const Input = (props) => {
    const {
        isPending,
        valueOfInput, 
        textOfInput, 
        placeholderOfInput, 
        handleInput
    } = props;

    return (
        <Row className="input">
            <Col xs={12} md={5} lg={5}>
                <FormLabel className="label" >{textOfInput}</FormLabel>
                <FormControl disabled={isPending} type="text" value={valueOfInput} placeholder={placeholderOfInput} onChange={handleInput} />
            </Col>
        </Row>
    )
};

export { Input };

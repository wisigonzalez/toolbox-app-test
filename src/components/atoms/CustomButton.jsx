import React from "react";

import Button from 'react-bootstrap/Button';

const CustomButton = ({text, onClick}) => {
  return (
    <Button variant="primary"onClick={onClick}>{text}</Button>
  );
}

export { CustomButton };

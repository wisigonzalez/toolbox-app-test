import React from "react";

/**
 * Componente header que muestra un texto.
 * @param {string} text Texto a mostrar.
 * @returns {jsx} Retorna un elemento JSX (h1) con la clase header y el texto enviado como parametro.
 */
const Header = ({text}) => (
    <header>
        <h1 data-testid="header" className="header">{text}</h1>
    </header>
);

export { Header };

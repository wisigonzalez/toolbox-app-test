import React from "react";

/**
 * Componente footer que muestra un texto.
 * @param {string} text Texto a mostrar.
 * @returns {jsx} Retorna un elemento JSX (footer) con la clase footer y el texto enviado como parametro.
 */
const Footer = ({text}) => (
    <footer data-testid='footer' className="footer">{text}</footer>
);

export { Footer };

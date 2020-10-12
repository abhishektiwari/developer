import React from "react";
import Mermaid from './react-mermaid';

function Diagram({children}) {
    return (
        <Mermaid chart={children} />
    );
}

export default Diagram;
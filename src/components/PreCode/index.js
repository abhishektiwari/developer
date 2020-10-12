import React from "react";

function PreCode({ children }) {
    return (
      <pre>
        <code>{children}</code>
      </pre>
    );
}

export default PreCode;

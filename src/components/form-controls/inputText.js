import * as React from "react";
import './styles.scss';

// React SFC to render Input element
const TextInput = ({
    handler,
    meta: { label, placeholder }
}) => (
    <div>
        <label>{label}:</label>
        <input className="inputText" placeholder={placeholder}  {...handler()} />
    </div>
);

export default TextInput;

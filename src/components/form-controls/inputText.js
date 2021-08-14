import * as React from "react";
import './styles.scss';

// React SFC to render Input element
const TextInput = ({
    handler,
    meta: { label, placeholder, type }
}) => (
    <div className="form-control-container">
        <label>{label}:</label>
        <input type={type} className="inputText" placeholder={placeholder}  {...handler()} />
    </div>
);

export default TextInput;

import * as React from "react";
import ColorPicker from "../base/colorPicker";
import './styles.scss';


const ColorPickerFormInput = ({
    handler,
    meta: { label }
}) => (
    <div className="form-control-container">
        <label>{label}:</label>
        <ColorPicker {...handler()} />
    </div>
);

export default ColorPickerFormInput;

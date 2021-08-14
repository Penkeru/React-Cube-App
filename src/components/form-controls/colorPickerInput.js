import * as React from "react";
import { SliderPicker } from "react-color";
import './styles.scss';


const ColorPickerFormInput = ({
    handler,
    meta: { label, value }
}) => (
    <div className="form-control-container">
        <label>{label}:</label>
        <SliderPicker color={value} onChangeComplete={handler}
        />
    </div>
);

export default ColorPickerFormInput;

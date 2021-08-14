import * as React from "react";
import './styles.scss';

const AgeSelectBox = ({ handler }) => (
    <div>
        <label>Age:</label>
        <select className="selectBox" {...handler()}>
            <option value="" disabled>
                Select age
            </option>
            <option value="0-20">0-20</option>
            <option value="21-40">21-40</option>
            <option value="41-65">41-65</option>
            <option value="66-120">66-120</option>
        </select>
    </div>
);
export default AgeSelectBox;

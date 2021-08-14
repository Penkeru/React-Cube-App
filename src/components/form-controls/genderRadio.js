import * as React from "react";
import './styles.scss';

const GenderRadio = ({ handler }) => (
    <div className='genderContainer'>
        <div className='genderText'>
            <label>Gender:</label>
        </div>
        <div className='radioContainer'>
            <div>
                <input {...handler("radio", "male")} />
                <label>Male</label>
            </div>
            <div>
                <input {...handler("radio", "female")} />
                <label>Female</label>
            </div>
        </div>
    </div>
);

export default GenderRadio;

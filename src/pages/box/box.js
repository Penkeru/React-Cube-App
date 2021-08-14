import React from 'react';
import { useSelector } from 'react-redux';
import BoxScene from '../../components/base/scene';
import './box.scss'

export default function Box() {
    const boxSettings = useSelector((state) => state.boxSettingsStore.value);

    return (
        <div className="box-container">
            <BoxScene boxSettings={boxSettings} />
        </div>
    );
}
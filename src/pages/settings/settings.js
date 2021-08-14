import React from 'react';
import { FieldControl, FieldGroup, FormBuilder } from 'react-reactive-form';
import { useDispatch, useSelector } from 'react-redux';
import ColorPickerInput from '../../components/form-controls/colorPickerInput';
import TextInput from '../../components/form-controls/inputText';
import { updateBoxSettings } from '../../store/slices/boxSettingsSlice';
import './settings.scss';

export default function Settings() {
    const boxSettings = useSelector((state) => state.boxSettingsStore.value);
    const dispatch = useDispatch();
    const settingsForm = FormBuilder.group({
        width: (boxSettings && boxSettings.width) || "",
        height: (boxSettings && boxSettings.height) || "",
        color: (boxSettings && boxSettings.color) || "#ffffff",
        rotatingSpeed: (boxSettings && boxSettings.rotatingSpeed) || "12"
    });

    const handleSubmit = (e) => {
        dispatch(updateBoxSettings(settingsForm.value));
        e.preventDefault();
    }

    return (
        <div className="settings-container">
            <div className="settings-title">Box Settings</div>
            <div className="settings-form-container">
                <FieldGroup
                    control={settingsForm}
                    render={({ pristine, value }) => (
                        <form onSubmit={() => handleSubmit}>
                            <FieldControl
                                name="width"
                                meta={{
                                    label: "Width",
                                    placeholder: "Insert box width",
                                    type: 'text'
                                }}
                                render={TextInput}
                            />
                            <FieldControl
                                name="height"
                                meta={{
                                    label: "Height",
                                    placeholder: "Insert box height",
                                    type: 'text'
                                }}
                                render={TextInput}
                            />
                            <FieldControl
                                name="color"
                                meta={{
                                    label: "Box Color"
                                }}
                                render={ColorPickerInput}
                            />
                            <FieldControl
                                name="rotatingSpeed"
                                meta={{
                                    label: "Rotating Speed",
                                    placeholder: "",
                                    type: 'number'
                                }}
                                render={TextInput}
                            />
                            <div className="buttons-container">
                                <button disabled={pristine} onClick={e => handleSubmit(e)}>Save</button>
                            </div>
                        </form>
                    )}
                />
            </div>
        </div>
    );
}
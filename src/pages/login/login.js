import React from 'react';
import { FieldControl, FieldGroup, FormBuilder } from 'react-reactive-form';
import AgeSelectBox from '../../components/form-controls/ageSelectBox';
import GenderRadio from '../../components/form-controls/genderRadio';
import TextInput from '../../components/form-controls/inputText';
import { useSelector, useDispatch } from 'react-redux'
import './login.scss';
import { deleteUserData, updateUserData } from '../../store/slices/userDataSlice';


export function Login() {
    const userData = useSelector((state) => state.userDataStore.value);
    const dispatch = useDispatch();
    const userForm = FormBuilder.group({
        name: "",
        gender: "male",
        age: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserData(userForm.value));
    }

    const clearUserData = () => {
        dispatch(deleteUserData());
    };

    return (
        <div className="login-container">
            <div className="login-title">Welcome {userData ? userData.name : 'New User'}</div>
            <div className="login-content">
                {userData &&
                    <>
                        <button onClick={clearUserData.bind(this)}>Reset user data</button>
                    </>
                }
                {!userData &&
                    <>
                        <div className="form-container">
                            <div className="form-label">Please fill the form:</div>
                            <FieldGroup
                                control={userForm}
                                render={({ pristine, value }) => (
                                    <form onSubmit={() => handleSubmit}>
                                        <FieldControl
                                            name="name"
                                            meta={{
                                                label: "Name",
                                                placeholder: "Insert User name",
                                                type: "text"
                                            }}
                                            render={TextInput}
                                        />
                                        <FieldControl name="gender" render={GenderRadio} />
                                        <FieldControl name="age" render={AgeSelectBox} />
                                        <div className="buttons-container">
                                            <button disabled={pristine} onClick={e => handleSubmit(e)}>Submit</button>
                                        </div>
                                    </form>
                                )}
                            />
                        </div>
                    </>
                }
            </div>
        </div>
    );
}
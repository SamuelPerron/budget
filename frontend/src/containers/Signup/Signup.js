import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import FullPageHeader from '../../components/FullPageHeader/FullPageHeader';
import FullPageForm from '../../components/FullPageForm/FullPageForm';
import FullPage from '../../components/FullPage/FullPage';
import Button from '../../components/Button/Button';

const Signup = props => {
    const defaultMessages = {
        username: '',
        email: '',
        password: '',
        repearPassword: '',
        general: '',
        successMessage: '',
    };
    const defaultFields = {
        username: '',
        email: '',
        password: '',
        repearPassword: '',
    };
    const [formData, setFormData] = useState(defaultFields);
    const [errorMessages, setErrorMessages] = useState(defaultMessages);

    const resetMessages = () => {
        setErrorMessages(defaultMessages);
    }

    const resetFields = () => {
        setFormData(defaultFields);
    }

    const registerUser = () => {
        resetMessages();

        if (formData.password === formData.repeatPassword) {
            const data = new FormData();
            data.append('username', formData.username);
            data.append('password', formData.password);
            data.append('email', formData.email);

            axios({
                url: props.api + 'users/',
                method: 'POST',
                headers: {...props.headers, 'Content-Type': 'multipart/form-data'},
                data
            })
            .then(r => {
                resetFields();
                setErrorMessages({success: 'User created, you can now login.'});
            })
            .catch(e => {
                const error = e.response.data;
                for (var key in error) {
                    switch (key) {
                        case 'username':
                                setErrorMessages({username: error[key]});
                            break;
                        case 'password':
                                setErrorMessages({password: error[key]});
                            break;
                        case 'email':
                                setErrorMessages({email: error[key]});
                            break;
                        default:
                            setErrorMessages({general: error[key]});
                    }
                }
            });
        } else {
            setErrorMessages({repeatPassword: 'Passwords don\'t match'});
        }
    }

    return (
        <FullPage background="full" showClose={true}>
            <FullPageHeader title="Create new account" />

            <FullPageForm>
                <div>
                    <input
                        value={formData.username}
                        onChange={e => setFormData({...formData, username: e.target.value})}
                        placeholder="Username" />
                    <span className="error">{errorMessages.username}</span>
                </div>
                <div>
                    <input
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        placeholder="Email" />
                    <span className="error">{errorMessages.email}</span>
                </div>
                <div>
                    <input
                        type="password"
                        value={formData.password}
                        onChange={e => setFormData({...formData, password: e.target.value})}
                        placeholder="Password" />
                    <span className="error">{errorMessages.password}</span>
                </div>
                <div>
                    <input
                        type="password"
                        value={formData.repeatPassword}
                        onChange={e => setFormData({...formData, repeatPassword: e.target.value})}
                        placeholder="Repeat password" />
                    <span className="error">{errorMessages.repeatPassword}</span>
                </div>
                <div>
                    <Button label="Register" onClick={registerUser} />
                    <span className="error">{errorMessages.general}</span>
                    <span className="error">{errorMessages.success}</span>
                </div>
            </FullPageForm>
        </FullPage>
    );
}

const mapStateToProps = state => {
    return {
        api: state.apiBaseURL,
    };
};

export default connect(mapStateToProps)(Signup);

import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actionTypes from '../../store/actionTypes';
import FullPageHeader from '../../components/FullPageHeader/FullPageHeader';
import FullPageForm from '../../components/FullPageForm/FullPageForm';
import FullPage from '../../components/FullPage/FullPage';
import Button from '../../components/Button/Button';

import './styles.scss';

const Login = props => {
    const defaultMessages = {
        username: '',
        password: '',
        general: '',
    };
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [errorMessages, setErrorMessages] = useState(defaultMessages);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            props.onLogoutSuccessful();
            localStorage.removeItem('token');
        }
    }, []);

    const resetMessages = () => {
        setErrorMessages(defaultMessages);
    }

    const authUser = () => {
        resetMessages();

        axios.post(props.api + 'login/', { username: formData.username, password: formData.password })
        .then(r => {
            const token = r.data.token;
            props.onLoginSuccessful(token);
            localStorage.setItem('token', token);
            props.history.push('/');
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
                    default:
                        setErrorMessages({general: error[key]});
                }
            }
        });
    }

    return (
        <FullPage background="partial" showClose={false}>
            <FullPageHeader title="Login" />

            <FullPageForm>
                <div>
                    <input value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})} placeholder="Username" />
                    <span className="error">{errorMessages.username}</span>
                </div>
                <div>
                    <input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} placeholder="Password" />
                    <span className="error">{errorMessages.password}</span>
                </div>
                <div>
                    <Button label="Login" size="large" onClick={authUser} />
                    <span className="error">{errorMessages.general}</span>
                </div>
            </FullPageForm>

            <div className="no-account">
                <Button label="Don't have an account ?" onClick={() => props.history.push('/register')} />
            </div>
        </FullPage>
    );
}

const mapStateToProps = state => {
    return {
        api: state.apiBaseURL,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoginSuccessful: (token, user) => dispatch({type: actionTypes.SET_TOKEN, token, user}),
        onLogoutSuccessful: () => dispatch({type: actionTypes.UNSET_TOKEN}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

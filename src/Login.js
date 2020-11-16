import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css';
import { actionTypes } from './redux/reducer';
import { useStateValue } from './StateProvider';

const Login = () => {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(err => {
                alert(err.message);
            })
    }
    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://i.pinimg.com/originals/99/0b/7d/990b7d2c2904f8cd9bc884d3eed6d003.png" alt=""/>
                <div className="login__text">
                    <h1>Sign In to What's App</h1>
                </div>
                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    );
};

export default Login;
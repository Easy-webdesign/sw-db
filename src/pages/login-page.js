import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = p => {
    if(p.isLoggedIn) return <Redirect to='/'/>

    return(
        <div className='login-page jumbotron'>
            <p>Login to see secret page!</p>
            <button className='btn btn-primary' onClick={p.onLogin}> Login</button>
        </div>
    );
};

export default LoginPage
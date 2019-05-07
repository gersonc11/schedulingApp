// Initial Log in and landing page
// user name and password 
//https://medium.com/@dternyak/react-redux-flask-a-modern-web-application-boilerplate-fce1bfa62594
import React from 'react';
import LoginForm from '../components/Login/LoginForm'

const styles = {
    body: {
        background: '#90ccf4',

    }
}

const Login = () => {
    return (
        <div style={styles.body}>
            <LoginForm />
        </div>
    )
}

export default Login;
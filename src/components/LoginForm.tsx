import React, { useState } from "react";
import { createUseStyles } from 'react-jss';
import theme from "../common/theme";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/controller/authController";

const useStyles = createUseStyles({
    authFormContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.colors.backgroundColor,
        fontSize: 20,
    }
});
export const LoginForm = (props: {
    onFormSwitch: (arg0: string) => void;
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();

    const navigate = useNavigate();

    const handleSubmit = async (e: {preventDefault: () => void }) => {
        e.preventDefault();
        const loggedInUser = {
            email,
            password,
        }
    
    const response = await loginUser(loggedInUser);
    if (response.isSuccess === true) {
        const {accessToken} = response.body;
    } else {
        (response.isSuccess === false)
    }
    console.log(response)
        navigate('/dashboard');
    
}
    return (
        <div className={classes.authFormContainer}>
            <h2>Login</h2>
            <form className="loginForm" onSubmit={handleSubmit}>
                <input value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                type="email" 
                placeholder="E-mail" 
                id="email" 
                name="email" />
                    <br />
                <input value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                type="password" 
                placeholder="Password" id="password" name="password" />
                    <br />
                <button type="submit">LOG IN</button>
            </form>
            <button className="linkBtn" 
            onClick={() => props.onFormSwitch('signup')}>
                Don't have an account? Sign up here
                </button>
        </div>
    )
};

export default LoginForm;
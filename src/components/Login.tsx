import React, { useState } from "react";
import { createUseStyles } from 'react-jss';
import theme from "../common/theme";
import { useNavigate } from "react-router-dom";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

const useStyles = createUseStyles({
    authFormContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.colors.backgroundColor,
        fontSize: 20,
    }
})


export const Login = (props: any) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(email);
    }
    const classes = useStyles();
    return (
        <div className={classes.authFormContainer}>
            <h2>Login</h2>
            <form className="loginForm" onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail" id="email" name="email" />
                <br />
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <br />
                <button type="submit">LOG IN</button>
            </form>
            <button className="linkBtn" onClick={() => props.onFormSwitch('signup')}>Don't have an account? Sign up here</button>
        </div>
    )
};

export default Login;
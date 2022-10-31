import React, { useState } from "react";
import { createUseStyles } from 'react-jss';
import theme from "../common/theme";
import Login from "./Login";

export const Signup = (props: any) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lasttName, setLastName] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="authFormContainer">
            <h2>Sign up</h2>
            <form className="signUpForm" onSubmit={handleSubmit}>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" id="name" name="name" />
                <input value={lasttName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" id="name" name="name" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail" id="email" name="email" />
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button type="submit">SIGN UP</button>
            </form>
            <button className="linkBtn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
};

export default Signup;
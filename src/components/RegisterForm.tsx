import { useState } from "react";
import { createUseStyles } from 'react-jss';
import theme from "../common/theme";
import { registerUser } from "../api/controller/authController";
import { setAuthToken } from "../helpers/authHelpers";
import { useNavigate } from "react-router-dom";

const useStyles = createUseStyles({
    authFormContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.colors.backgroundColor,
        fontSize: 20,
    }
});

export const RegisterForm = (props: {
    onFormSwitch: (arg0: string) => void;
}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();

    const navigate = useNavigate();
    
    const handleSubmit = async (e: {preventDefault: () => void }) => {
         e.preventDefault();
            const newUser = {
                email,
                firstName,
                lastName,
                password,
        };
        const response = await registerUser(newUser);
        if (response.isSuccess === true) {
            const {accessToken} = response.body;
            if (accessToken) {
                setAuthToken(accessToken);
                navigate('/dashboard');
            }
        }
    };
    return (
        <div className={classes.authFormContainer}>
            <h2>Sign up</h2>
            <form className="signUpForm" onSubmit={handleSubmit}>
                <input value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} 
                placeholder="First Name" 
                id="firstName" name="firstName" />
                <br />
                <input value={lastName} 
                onChange={(e) => setLastName(e.target.value)} 
                placeholder="Last Name" 
                id="lastName" name="lastName" />
                <br />
                <input value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                type="email" placeholder="E-mail" 
                id="email" name="email" />
                <br />
                <input value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                type="password" placeholder="Password" 
                id="password" name="password" />
                <br />
                <button type="submit">SIGN UP</button>
            </form>
            <button className="linkBtn" 
            onClick={() => props.onFormSwitch('login')}>
                Already have an account? Login here.
            </button>
        </div>
    );
};


export default RegisterForm;
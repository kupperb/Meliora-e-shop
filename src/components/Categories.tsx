import React from "react";
import { createUseStyles } from 'react-jss';
import theme from "../common/theme";
import { useLocation, useNavigate } from "react-router-dom";


const useStyles = createUseStyles({
    container: {
        height: 550,
        width: '100%',
        display: 'flex',
    },

    containerItem: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end',
        paddingBottom: 110,
    },

    womenContainer: {
        backgroundPosition: 'bottom',
        backgroundImage: 'url("images/women.jpg")',
    },

    menContainer: {
        backgroundImage: 'url("images/men.jpg")',
        backgroundPosition: 'center',
    },

    landingButton: {
        height: 70,
        width: 241,
        backgroundColor: theme.colors.white,
        fontSize: 25,
        border: [1, 'solid', theme.colors.black],
        fontFamily: 'Montserrat',
        fontWeight: 100,
        cursor: 'pointer',
    },
});


const Categories: React.FC = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/dashboard')
    }

    return (
        <div className={classes.container}>
            <div className={`${classes.containerItem} ${classes.womenContainer}`} >
                <button onClick={handleButtonClick} className={classes.landingButton}>WOMEN</button>
            </div>
            <div className={`${classes.containerItem} ${classes.menContainer}`} >
                <button onClick={handleButtonClick} className={classes.landingButton}>MEN</button>
            </div>
        </div>

    )
};


export default Categories;
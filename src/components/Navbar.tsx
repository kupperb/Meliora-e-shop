import React from "react";
import { createUseStyles } from 'react-jss';
import theme from "../common/theme";
import { Link, useLocation } from "react-router-dom";


const useStyles = createUseStyles({
    navbar: {
        height: 120,
        maxWidth: '100%',
        color: theme.colors.black,
        backgroundColor: theme.colors.white,
        display: 'flex',
        gap: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    wordsContainer: {
        maxWidth: '100%',
        display: 'flex',
        gap: 100,
        flexDirection: 'row',
        margin:[44,0,46,100],
    },

    words: {
        color: theme.colors.black,
        fontSize:25,
        fontFamily: 'Montserrat',
        textDecoration: 'none',
    },
    
    iconsContainer: {
        color: theme.colors.black,
        display: 'flex',
        gap: 100,
        flexDirection: 'row',
        margin:[40,100,40,0],
    },

    icon: {
        height: 35,
    },
});


const Navbar: React.FC = () => {
    const classes = useStyles();
    const location = useLocation();
    
    return (
        <div className={classes.navbar}>
            <div className={classes.wordsContainer}>
                <Link to='/'  className={classes.words}>
                    HOME
                </Link>
                <Link to='/dashboard'  className={classes.words}>
                    SHOP
                </Link>
                <Link to='/about'  className={classes.words}>
                    ABOUT
                </Link>
            </div>
            <div className={classes.iconsContainer}>
            <div><Link to='/sign' >
                        <img src="images/iconMan.png" className={classes.icon}/>
                    </Link>
                </div>
                <div>
                    <Link to='/dashboard' >
                        <img src="images/iconBasket.png" className={classes.icon}/>
                    </Link>
                </div>
            </div>
        </div>
    )
};


export default Navbar;
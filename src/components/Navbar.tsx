import React from "react";
import { createUseStyles } from 'react-jss';
import theme from "../common/theme";
import { Link } from "react-router-dom";


const useStyles = createUseStyles({
    navbar: {
        height: 110,
        maxWidth: '100%',
        color: theme.colors.black,
        backgroundColor: theme.colors.white,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    wordsContainer: {
        maxWidth: '100%',
        display: 'flex',
        gap: 90,
        flexDirection: 'row',
        margin:[40,0,40,100],
    },
    words: {
        color: theme.colors.black,
        fontSize:theme.font.size,
        fontFamily: theme.font.main,
        textDecoration: 'none',
    },
    iconsContainer: {
        color: theme.colors.black,
        display: 'flex',
        gap: 90,
        flexDirection: 'row',
        margin:[35,90,35,0],
    },
    icon: {
        height: 30,
    },
});

type NavbarProps = {
    hasLogo: boolean,
}

const Navbar: React.FC<NavbarProps> = ({hasLogo}) => {
    const classes = useStyles();
    
    return (
        <div className={classes.navbar} >
            <div className={classes.wordsContainer}>
                <Link to='/'  className={classes.words}>
                    HOME
                </Link>
                <Link to='/dashboard' className={classes.words}>
                    SHOP
                </Link>
            </div>
            <div>{hasLogo ? "logo" : ""}</div>
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
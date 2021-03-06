import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const useStyles = makeStyles(() => ({
    root: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 55,
        padding: '0 30px',
        justifyContent: "space-between",
        display: "flex",
        marginBottom: "20px",

    },
    navlinks: {
        justifyContent: "space-between",
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
        textAlign: "start"
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: "20px",
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

const Header = () => {
    const classes = useStyles();
    const { user, logOut } = useAuth();
    return (
        <div>
            <AppBar className={classes.root} position="static">
                <CssBaseline />
                <Toolbar>
                    <Typography variant="h4" className={classes.logo}>
                        Navbar
                    </Typography>
                    <div className={classes.navlinks}>
                        <Link to="/" className={classes.link}>
                            Home
                        </Link>
                        <Link to="/shipping" className={classes.link}>
                            Shipping
                        </Link>
                        {!user?.displayName ? <div>
                            <Link to="/registration" className={classes.link}>
                                Registration
                            </Link>
                            <Link to="/login" className={classes.link}>
                                Login
                            </Link>
                        </div> : <Link to="/" className={classes.link}>
                            Hello, {user.displayName}
                        </Link>}
                        {user?.displayName && <Button sx={{ marginLeft: '20px' }} onClick={logOut} variant='contained'>Log Out</Button>}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
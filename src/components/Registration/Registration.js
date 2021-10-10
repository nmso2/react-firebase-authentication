import { Button, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box, padding } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    registration: {
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
}));

const Registration = () => {
    const classes = useStyles();
    return (
        <div>
            <TextField
                sx={{ width: 500, maxWidth: '100%', }}
                required
                margin='dense'
                label="Name"
                type="text"
            />
            <br />
            <TextField
                sx={{ width: 500, maxWidth: '100%', }}
                required
                margin='dense'
                label="Email"
                type="email"
            />
            <br />
            <TextField
                sx={{ width: 500, maxWidth: '100%', }}
                required
                margin='dense'
                label="Password"
                type="password"
            />
            <br />
            <br />
            <Button variant="contained">Register</Button>
            <br /><br />
            <Link to="/login">Already registered?</Link>
        </div>
    );
};

export default Registration;
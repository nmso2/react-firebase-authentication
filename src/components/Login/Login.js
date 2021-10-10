import { Button, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
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
            <Button variant="contained">Login</Button>
            <br /><br />
            <Link to="/registration">New user?</Link>
        </div>
    );
};

export default Login;
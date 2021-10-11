import { Button, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle}=useAuth();
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

        <br /><br />
        <Button onClick={signInWithGoogle}  variant="outlined"> <GoogleIcon></GoogleIcon></Button>
        
        </div>
    );
};

export default Login;
import React, { createContext } from 'react';
import useFirebae from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const allContext = useFirebae();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
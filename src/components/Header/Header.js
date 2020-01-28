import React from 'react';
import { useHistory } from 'react-router-dom';

import { logout } from '../../services/auth';

import { AppBar, Container, Toolbar, Typography, IconButton } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

import './Header.css';

const Header = () => {
    const history = useHistory();

    const onLogout = () => {
        logout();
        history.push('/');
    };

    return (
        <AppBar className="header" position="fixed">
            <Container>
                <Toolbar className="toolbar">
                    <Typography variant="h6">4T Insta</Typography>
                    <IconButton color="inherit" onClick={onLogout}>
                        <ExitToApp />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );

};

export default Header;
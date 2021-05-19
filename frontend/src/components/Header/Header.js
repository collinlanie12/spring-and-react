import React from 'react';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#4896B8",
    },
    logo: {
        fontFamily: "Nunito",
        fontWeight: 600,
        color: "#FFFFF",
        textAlign: "left",
    },
}));

const Header = () => {
    const { header, logo } = useStyles();
    return (
        <header mb="2rem">
            <AppBar className={header}>
                <Toolbar>
                    <Typography variant="h6" component="h1" className={logo}>Anime Watchlist</Typography>
                </Toolbar>
            </AppBar>
        </header>

    );
}

export default Header;
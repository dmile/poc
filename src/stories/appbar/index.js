import React from 'react';

import {storiesOf} from '@storybook/react';
import AppBar from "../../components/appbar/index";
import ResponsiveAppBar from "../../components/appbar/responsive";
import Typography from "@material-ui/core/Typography/Typography";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Settings from '@material-ui/icons/Settings';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#54301a'
        }
    }
});

storiesOf(AppBar.name, module)

    .add('simple', () => (
        <AppBar>
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    Title
                </Typography>
            </Toolbar>
        </AppBar>
    ))

    .add('with buttons', () => (
        <AppBar>
            <Toolbar>
                <IconButton style={{marginLeft: -12, marginRight: 20}} color="inherit" aria-label="Menu">
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
                    Title
                </Typography>
                <Button color="inherit">Button1</Button>
                <Button color="inherit">Button2</Button>
                <Button color="inherit">Button3</Button>
            </Toolbar>
        </AppBar>
    ))

    .add('with icons', () => (
        <AppBar>
            <Toolbar>
                <IconButton style={{marginLeft: -12, marginRight: 20}} color="inherit" aria-label="Menu">
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
                    Title
                </Typography>
                <IconButton color="inherit">
                    <MailIcon/>
                </IconButton>
                <IconButton color="inherit">
                    <Settings/>
                </IconButton>
                <IconButton color="inherit">
                    <AccountCircle/>
                </IconButton>
            </Toolbar>
        </AppBar>
    ))

    .add('with responsive icons and color', () => (
        <MuiThemeProvider theme={theme}>
            <ResponsiveAppBar/>
        </MuiThemeProvider>
    ));

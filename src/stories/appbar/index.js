import React from 'react';

import {storiesOf} from '@storybook/react';
import AppBar from "../../components/appbar/index";
import Typography from "@material-ui/core/Typography/Typography";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Settings from '@material-ui/icons/Settings';
import Button from '@material-ui/core/Button';

storiesOf(AppBar.name, module)

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
                    <AccountCircle/>
                </IconButton>
                <IconButton color="inherit">
                    <Settings/>
                </IconButton>
            </Toolbar>
        </AppBar>
    ));

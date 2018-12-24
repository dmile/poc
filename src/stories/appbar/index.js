import React from 'react';

import {storiesOf} from '@storybook/react';
import AppBar from "../../components/appbar/index";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#54301a',
        },
        secondary: {
            main: '#88abd5'
        }
    }
});

storiesOf('AppBar', module)

    .add('with responsive icons', () => (
        <MuiThemeProvider theme={theme}>
            <AppBar/>
        </MuiThemeProvider>
    ));

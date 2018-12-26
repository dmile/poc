import React from 'react';

import {storiesOf} from '@storybook/react';
import Toolbar from "../../components/toolbar";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#e6e6e6'
        }
    },
    breakpoints: {
        // values: {
        //     xs: 0,
        //     sm: 600,
        //     md: 960,
        //     lg: 1280,
        //     xl: 1920
        // },
        values: {
            xs: 0,
            sm: 600,
            md: 840,
            lg: 1284,
            xl: 1920
        }
    }
});

storiesOf('Toolbar', module)

    .add('draft', () => (
        <MuiThemeProvider theme={theme}>
            <Toolbar/>
        </MuiThemeProvider>
    ));

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Toolbar from './components/toolbar/';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import {fade} from "@material-ui/core/styles/colorManipulator";
import common from "@material-ui/core/colors/common";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        divider: fade(common.white, 0.25),
        primary: {
            main: '#111'
        },
        secondary: {
            main: '#e6e6e6'
        }
    },
    typography: {
        useNextVariants: true
    }
    // breakpoints: {
    //     values: {
    //         xs: 0,
    //         sm: 600,
    //         md: 840,
    //         lg: 1284,
    //         xl: 1920
    //     }
    // }
});

const App = () => (
    <React.Fragment>
        <CssBaseline>
            <MuiThemeProvider theme={theme}>
                <Toolbar/>
            </MuiThemeProvider>
        </CssBaseline>
    </React.Fragment>
);

export default App;

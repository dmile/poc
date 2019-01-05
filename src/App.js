import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider} from "@material-ui/core";

import Toolbar from './components/toolbar/';
import theme from './theme'

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

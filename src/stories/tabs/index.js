import React from 'react';

import {storiesOf} from '@storybook/react';
import Tabs from "../../components/tabs/index";
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

storiesOf('Tabs', module)

    .add('with scroll buttons', () => (
        <MuiThemeProvider theme={theme}>
            <Tabs/>
        </MuiThemeProvider>
    ));

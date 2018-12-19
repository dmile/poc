import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from './components/appbar/AppBar'

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline>
                    <AppBar/>
                </CssBaseline>
            </React.Fragment>
        );
    }
}

export default App;

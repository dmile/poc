import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';

const AppBar = (props) => (
    <div style={{flexGrow: 1}}>
        <MuiAppBar position="static">
            {props.children}
        </MuiAppBar>
    </div>
);

export default AppBar;
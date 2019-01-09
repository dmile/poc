import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';

import WidthProvider from "../../utils/context/width/WidthProvider";

class Toolbar extends React.Component {
    render() {
        const {header, content} = this.props;
        return (
            <AppBar position="static">
                <WidthProvider>
                    {header}
                    {content}
                </WidthProvider>
            </AppBar>
        );
    }
}


Toolbar.propTypes = {
    header: PropTypes.node,
    content: PropTypes.node
};

export default Toolbar;
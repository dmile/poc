import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';

class Toolbar extends React.Component {
    render() {
        const {width, header, content} = this.props;
        return (
            <AppBar position="static">
                {header}
                {content}
            </AppBar>
        );
    }
}


Toolbar.propTypes = {
    header: PropTypes.node,
    content: PropTypes.node,
    width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};

export default Toolbar;
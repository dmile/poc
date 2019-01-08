import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";

const styles = (theme) => ({
});

class Category extends React.Component {

    render() {
        const {children} = this.props;
        return (
            <Toolbar disableGutters={true}>
                {children}
            </Toolbar>
        );
    }
}

Category.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default withStyles(styles, {name: 'MuiToolbar'})(Category);
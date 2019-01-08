import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from "@material-ui/core/Toolbar";

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
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Category;
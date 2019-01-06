import React from 'react';
import PropTypes from 'prop-types';

class MenuItemWrapper extends React.Component {
    render() {
        const {children, ...otherProps} = this.props;
        return children(otherProps);
    }
}


MenuItemWrapper.propTypes = {
    asMenuItem: PropTypes.bool,
    label: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired
};

export default MenuItemWrapper;
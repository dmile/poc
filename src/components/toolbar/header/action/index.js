import React from 'react';
import PropTypes from 'prop-types';

class HeaderAction extends React.Component {
    render() {
        return null;
    }
}

HeaderAction.propTypes = {
    primary: PropTypes.bool,
    label: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default HeaderAction;
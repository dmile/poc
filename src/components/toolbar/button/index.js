import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button/Button";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const styles = (theme) => ({
    root: {
        minWidth: 36
    }
});

class ToolbarButton extends React.Component {

    render() {
        const {classes, icon, label, expandable} = this.props;
        return (
            <Button color="inherit">
                {icon}
                {label}
                {expandable && <ArrowDropDownIcon fontSize="small"/>}
            </Button>
        );
    }
}

ToolbarButton.propTypes = {
    classes: PropTypes.object.isRequired,
    icon: PropTypes.node.isRequired,
    label: PropTypes.string,
    expandable: PropTypes.bool
};

//TODO refactor me
export default withStyles(styles, {name: 'MuiButton'})(ToolbarButton);
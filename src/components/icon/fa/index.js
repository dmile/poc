import React from 'react';
import {withStyles} from "@material-ui/core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const styles = theme => ({
    root: {
        width: '1em',
        height: '1em',
        fontSize: '20px'
    }
});

class FaIcon extends React.Component {
    render() {
        const {classes, ...otherProps} = this.props;
        return <FontAwesomeIcon {...otherProps} className={classes.root} />
    }
}

export default withStyles(styles)(FaIcon);
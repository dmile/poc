import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import {withStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from "@material-ui/icons/Notifications";

const styles = (theme) => ({
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: '12px'
    }
});

class ToolbarHeader extends React.Component {

    render() {
        const {classes, title} = this.props;
        return (
            <Toolbar>
                <IconButton color="inherit" className={classes.menuButton}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                    {title}
                </Typography>
                <div className={classes.grow}/>
                <Hidden only={'xs'}>
                    <IconButton color="inherit">
                        <SearchIcon/>
                    </IconButton>
                    <IconButton color="inherit">
                        <NotificationsIcon/>
                    </IconButton>
                </Hidden>
                <IconButton color="inherit">
                    <MoreIcon/>
                </IconButton>
            </Toolbar>
        );
    }
}

ToolbarHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
};

//TODO add more properties
export default withStyles(styles, {name: 'MuiToolbar'})(ToolbarHeader);
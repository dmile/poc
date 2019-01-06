import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import withWidth, {isWidthUp} from "@material-ui/core/withWidth";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = (theme) => ({
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: '12px'
    }
});

class ToolbarHeader extends React.Component {
    state = {
        anchorEl: null
    };

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    render() {
        const {classes, title, width, onMenuButtonClick, children} = this.props;
        const isWidthUpSm = isWidthUp('sm', width);

        const primaryChildren = React.Children.toArray(children)
            .filter(child => child.props.primary);
        const buttonsChildren = isWidthUpSm ? primaryChildren : [];

        const otherChildren = React.Children.toArray(children)
            .filter(child => !child.props.primary);
        const menuChildren = isWidthUpSm ? otherChildren : primaryChildren.concat(otherChildren);

        return (
            <Toolbar>
                <IconButton color="inherit" className={classes.menuButton} onClick={onMenuButtonClick}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                    {title}
                </Typography>
                <div className={classes.grow}/>
                {
                    React.Children.map(buttonsChildren, renderActionButton)
                }
                {
                    menuChildren.length !== 0 && (
                        <div>
                            <IconButton color="inherit" onClick={this.handleMenu}>
                                <MoreIcon/>
                            </IconButton>
                            <Menu
                                anchorEl={this.state.anchorEl}
                                getContentAnchorEl={null}
                                anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                                open={Boolean(this.state.anchorEl)}
                                onClick={this.handleClose}
                                onClose={this.handleClose}
                            >
                                {
                                    React.Children.map(menuChildren, renderMenuItem)
                                }
                            </Menu>
                        </div>
                    )
                }

            </Toolbar>
        );
    }
}

const renderActionButton = (action) => {
    const {icon, label, onClick} = action.props;
    return (
        <IconButton title={label} color="inherit" onClick={onClick}>
            {icon}
        </IconButton>
    )
};

const renderMenuItem = (action) => {
    const {icon, label, onClick} = action.props;
    return (
        <MenuItem color="inherit" onClick={onClick}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText inset primary={label}/>
        </MenuItem>
    )
};

ToolbarHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    onMenuButtonClick: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default withWidth()(withStyles(styles)(ToolbarHeader));
import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';

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
        const buttonsNumber = this.props[childrenPropName(width)];

        const childrenArr = React.Children.toArray(children);
        const buttonsChildren = childrenArr.slice(0, buttonsNumber);
        const menuChildren = childrenArr.slice(buttonsNumber, childrenArr.length);

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
                    buttonsChildren
                }
                {
                    menuChildren.length > 0 && (
                        <div>
                            <IconButton title="More..." color="inherit" onClick={this.handleMenu}>
                                <MoreVertIcon/>
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
                                    React.Children.map(menuChildren, child =>
                                        React.cloneElement(child, {asMenuItem: true}))
                                }
                            </Menu>
                        </div>
                    )
                }
            </Toolbar>
        );
    }
}

const childrenPropName = (width) => `children${width.charAt(0).toUpperCase()}${width.charAt(1)}`;

ToolbarHeader.defaultProps = {
    childrenXs: 0,
    childrenSm: 2,
    childrenMd: 2,
    childrenLg: 2,
    childrenXl: 2
};


ToolbarHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    childrenXs: PropTypes.number,
    childrenSm: PropTypes.number,
    childrenMd: PropTypes.number,
    childrenLg: PropTypes.number,
    childrenXl: PropTypes.number,
    title: PropTypes.string.isRequired,
    width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    onMenuButtonClick: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default withStyles(styles)(ToolbarHeader);
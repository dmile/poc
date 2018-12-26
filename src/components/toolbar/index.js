import React from 'react';
import PropTypes from 'prop-types';
import MuiAppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from '@material-ui/icons/MoreVert';

import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import SwapVerticalCircleIcon from '@material-ui/icons/SwapVerticalCircle';
import withWidth, {isWidthUp} from '@material-ui/core/withWidth';
import MuiTab from "@material-ui/core/Tab/Tab";
import MuiTabs from "@material-ui/core/Tabs/Tabs";

const styles = theme => ({
    root: {
        width: '100%',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    grow: {
        flexGrow: 1,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    }
});

class Toolbar extends React.Component {
    state = {
        activeTab: 0
    };

    handleTabChange = (event, value) => {
        this.setState({activeTab: value});
    };


    render() {
        const {activeTab} = this.state;
        const {classes, width} = this.props;
        const isWidthUpSm = isWidthUp('sm', width);

        return (
            <div className={classes.root}>
                <MuiAppBar position="static">
                    <MuiToolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                            <MenuIcon/>
                        </IconButton>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                            Page Title
                        </Typography>
                        <div className={classes.grow}/>
                        <div className={classes.sectionDesktop}>
                            <IconButton color="inherit">
                                <SearchIcon/>
                            </IconButton>
                            <IconButton color="inherit">
                                <NotificationsIcon/>
                            </IconButton>
                        </div>
                        <IconButton color="inherit">
                            <MoreIcon/>
                        </IconButton>
                    </MuiToolbar>
                    <MuiTabs
                        scrollable
                        scrollButtons="on"
                        value={activeTab}
                        onChange={this.handleTabChange}
                    >
                        <MuiTab label="Catalogue" icon={isWidthUpSm && <BarChartRoundedIcon/>}/>
                        <MuiTab label="Cattwo" icon={isWidthUpSm && <SwapVerticalCircleIcon/>}/>
                        <MuiTab label="Catthree" icon={isWidthUpSm && <BarChartRoundedIcon/>}/>
                        <MuiTab label="Catfour" icon={isWidthUpSm && <SwapVerticalCircleIcon/>}/>
                        <MuiTab label="Catfive" icon={isWidthUpSm && <BarChartRoundedIcon/>}/>
                        <MuiTab label="Catsix" icon={isWidthUpSm && <SwapVerticalCircleIcon/>}/>
                        <MuiTab label="Catseven" icon={isWidthUpSm && <BarChartRoundedIcon/>}/>
                        <MuiTab label="Cateight" icon={isWidthUpSm && <SwapVerticalCircleIcon/>}/>
                        <MuiTab label="Catnine" icon={isWidthUpSm && <BarChartRoundedIcon/>}/>
                    </MuiTabs>
                </MuiAppBar>
            </div>
        );
    }
}

Toolbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withWidth()(withStyles(styles)(Toolbar));
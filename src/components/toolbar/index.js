import React from 'react';
import PropTypes from 'prop-types';
import MuiAppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles';
import MuiTab from "@material-ui/core/Tab/Tab";
import MuiTabs from "@material-ui/core/Tabs/Tabs";
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import SwapVerticalCircleIcon from '@material-ui/icons/SwapVerticalCircle';
import FormatColorIcon from '@material-ui/icons/FormatColorText';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatIndentDecreaseIcon from '@material-ui/icons/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@material-ui/icons/FormatIndentIncrease';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import withWidth, {isWidthUp} from '@material-ui/core/withWidth';
import {fade} from '@material-ui/core/styles/colorManipulator';

import CustomTabs from '../customtabs'
import ToolbarButton from '../toolbar/button'
import ToolbarHeader from './header'
import Hidden from "@material-ui/core/Hidden/Hidden";

const styles = theme => ({
    divider: {
        minWidth: '1px',
        display: 'flex',
        position: 'relative',
        backgroundColor: theme.palette.divider,
        marginTop: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit
    },
    tabRoot: {
        textTransform: 'initial'
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    menuButton: {
        minHeight: theme.spacing.unit,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
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
            <MuiAppBar position="static">
                <ToolbarHeader title="Page Title"/>
                <Divider variant="middle"/>
                <MuiTabs
                    scrollable={true}
                    scrollButtons="auto"
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
                <Divider variant="middle"/>
                {activeTab === 0 &&
                    <CustomTabs
                        scrollable={true}
                        scrollButtons="auto"
                        value={activeTab}
                        onChange={this.handleTabChange}
                    >
                        <MuiToolbar disableGutters={true}>
                            <ToolbarButton icon={<FormatListNumberedIcon/>} expandable={true}/>
                            <Hidden xsDown>
                                <ToolbarButton icon={<FormatListBulletedIcon/>} expandable={true}/>
                            </Hidden>
                            <Hidden smDown>
                                <ToolbarButton icon={<FormatIndentDecreaseIcon/>}/>
                                <ToolbarButton icon={<FormatIndentIncreaseIcon/>}/>
                                <ToolbarButton icon={<FormatAlignLeftIcon/>}/>
                            </Hidden>
                            <ToolbarButton icon={<FormatAlignCenterIcon/>}/>
                            <ToolbarButton icon={<FormatAlignRightIcon/>}/>
                            <Hidden xsDown>
                                <ToolbarButton icon={<FormatAlignJustifyIcon/>}/>
                            </Hidden>
                            <ToolbarButton icon={<MoreIcon/>}/>
                        </MuiToolbar>
                        <div className={classes.divider}/>
                        <MuiToolbar disableGutters={true}>
                            <Hidden smDown>
                                <ToolbarButton
                                    icon={<FormatColorIcon className={classes.leftIcon}/>} label="Styles"
                                    expandable={true}/>
                            </Hidden>
                            <Hidden mdUp>
                                <ToolbarButton
                                    icon={<FormatColorIcon/>}
                                    expandable={true}/>
                            </Hidden>
                        </MuiToolbar>
                        <div className={classes.divider}/>
                        <MuiToolbar disableGutters={true}>
                            <Hidden smDown>
                                <ToolbarButton
                                    icon={<SearchIcon className={classes.leftIcon}/>} label="Find"
                                    expandable={true}/>
                            </Hidden>
                            <Hidden mdUp>
                                <ToolbarButton
                                    icon={<SearchIcon/>}
                                    expandable={true}/>
                            </Hidden>
                        </MuiToolbar>
                    </CustomTabs>
                }
            </MuiAppBar>
        );
    }
}

Toolbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

//TODO refactor me
export default withWidth()(withStyles(styles)(Toolbar));
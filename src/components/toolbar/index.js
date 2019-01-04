import React from 'react';
import PropTypes from 'prop-types';
import MuiAppBar from '@material-ui/core/AppBar';
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
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from '@material-ui/icons/Settings';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import withWidth, {isWidthUp} from '@material-ui/core/withWidth';
import ToolbarButton from '../toolbar/button'
import ToolbarHeader from './header'
import HeaderAction from './header/action'
import Category from './catalogue/category'
import Catalogue from './catalogue'
import Hidden from "@material-ui/core/Hidden/Hidden";

const styles = theme => ({
    leftIcon: {
        marginRight: theme.spacing.unit,
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
            <MuiAppBar position="static">
                <ToolbarHeader title="Page Title" onMenuButtonClick={() => console.log('menu button clicked')}>
                    <HeaderAction
                        primary
                        label="Search"
                        icon={<SearchIcon/>}
                        onClick={() => console.log('search action')}/>
                    <HeaderAction
                        primary
                        label="Notifications"
                        icon={<NotificationsIcon/>}
                        onClick={() => console.log('notification action')}/>
                    <HeaderAction
                        label="Settings"
                        icon={<SettingsIcon/>}
                        onClick={() => console.log('settings action')}/>
                    <HeaderAction
                        label="Exit"
                        icon={<ExitToAppIcon/>}
                        onClick={() => console.log('exit action')}/>
                </ToolbarHeader>
                <Divider variant="middle"/>
                <MuiTabs
                    scrollable
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
                <Catalogue>
                    <Category>
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
                    </Category>
                    <Category>
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
                    </Category>
                    <Category>
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
                    </Category>
                </Catalogue>
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
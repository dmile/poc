import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import MuiTab from "@material-ui/core/Tab/Tab";
import MuiTabs from "@material-ui/core/Tabs/Tabs";
import SearchIcon from '@material-ui/icons/Search';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import SwapVerticalCircleIcon from '@material-ui/icons/SwapVerticalCircle';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatIndentDecreaseIcon from '@material-ui/icons/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@material-ui/icons/FormatIndentIncrease';
import StarIcon from '@material-ui/icons/Star';
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from '@material-ui/icons/Settings';
import ToolbarHeader from './header'
import Category from './catalogue/category'
import Catalogue from './catalogue'
import MenuItemWrapper from './menu/item'
import IconButton from "@material-ui/core/IconButton/IconButton";
import Button from "@material-ui/core/Button/Button";
import PropTypes from 'prop-types';
import withWidth, {isWidthUp} from "@material-ui/core/withWidth";
import {withStyles} from '@material-ui/core/styles';
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

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
        const {width} = this.props;
        const isWidthUpSm = isWidthUp('sm', width);
        const isWidthUpMd = isWidthUp('md', width);

        return (
            <MuiAppBar position="static">
                <ToolbarHeader title="Page Title" onMenuButtonClick={() => console.log('menu button clicked')}>
                    <MenuItemWrapper
                        primary
                        label="Search"
                        icon={<SearchIcon/>}
                        onClick={() => console.log('search action')}
                    >
                        {renderActionButtonOrMenuItem}
                    </MenuItemWrapper>
                    <MenuItemWrapper
                        primary
                        label="Notifications"
                        icon={<NotificationsIcon/>}
                        onClick={() => console.log('notification action')}
                    >
                        {renderActionButtonOrMenuItem}
                    </MenuItemWrapper>
                    <MenuItemWrapper
                        label="Settings"
                        icon={<SettingsIcon/>}
                        onClick={() => console.log('settings action')}
                    >
                        {renderActionButtonOrMenuItem}
                    </MenuItemWrapper>
                    <MenuItemWrapper
                        label="Exit"
                        icon={<ExitToAppIcon/>}
                        onClick={() => console.log('exit action')}
                    >
                        {renderActionButtonOrMenuItem}
                    </MenuItemWrapper>
                </ToolbarHeader>
                <MuiTabs
                    scrollable
                    scrollButtons={isWidthUpMd ? "on" : "off"}
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
                {activeTab === 0 &&
                <Catalogue>
                    <Category name="category 1" icon={<StarIcon/>}>
                        <MenuItemWrapper label="FormatListNumbered" icon={<FormatListNumberedIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="FormatListBulleted" icon={<FormatListBulletedIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="FormatIndentDecrease" icon={<FormatIndentDecreaseIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="FormatIndentIncrease" icon={<FormatIndentIncreaseIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="FormatAlignLeft" icon={<FormatAlignLeftIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="FormatAlignCenter" icon={<FormatAlignCenterIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="FormatAlignRight" icon={<FormatAlignRightIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="FormatAlignJustify" icon={<FormatAlignJustifyIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                    </Category>
                    <Category name="category 2" icon={<StarIcon/>}>
                        <MenuItemWrapper label="FormatListNumbered" icon={<FormatListNumberedIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="FormatListBulleted" icon={<FormatListBulletedIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                    </Category>
                    <Category name="category 3" icon={<StarIcon/>}>
                        <MenuItemWrapper label="FormatListNumbered" icon={<FormatListNumberedIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="FormatListBulleted" icon={<FormatListBulletedIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="FormatListNumbered" icon={<FormatListNumberedIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="FormatListBulleted" icon={<FormatListBulletedIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                    </Category>
                    <Category name="category 4" icon={<StarIcon/>}>
                        <MenuItemWrapper label="FormatListNumbered" icon={<FormatListNumberedIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                    </Category>
                    <Category name="category 5" icon={<StarIcon/>}>
                        <MenuItemWrapper label="FormatListNumbered" icon={<FormatListNumberedIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                    </Category>
                    <Category name="category 6" icon={<StarIcon/>}>
                        <MenuItemWrapper label="FormatListNumbered" icon={<FormatListNumberedIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                    </Category>
                </Catalogue>
                }
            </MuiAppBar>
        );
    }
}

const actionButton = ({label, icon, onClick}) => (
    <IconButton title={label} color="inherit" onClick={onClick}>
        {icon}
    </IconButton>
);

const renderActionButtonOrMenuItem = ({asMenuItem, ...otherProps}) => {
    return asMenuItem ? menuItem(otherProps) : actionButton(otherProps);
};

const toolbarButton = ({icon, label, onClick}) => (
    <Button title={label} color="inherit" onClick={onClick}>
        {icon}
    </Button>
);

const renderToolbarButtonOrMenuItem = ({asMenuItem, ...otherProps}) => {
    return asMenuItem ? menuItem(otherProps) : toolbarButton(otherProps);
};

const menuItem = ({icon, label, onClick}) => (
    <MenuItem color="inherit" onClick={onClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText inset primary={label}/>
    </MenuItem>
);

Toolbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

//TODO create ToolbarContent, extract data init to App
export default withWidth()(withStyles(styles)(Toolbar));
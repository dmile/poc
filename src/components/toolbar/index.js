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
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatIndentDecreaseIcon from '@material-ui/icons/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@material-ui/icons/FormatIndentIncrease';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import TextRotationNoneIcon from '@material-ui/icons/TextRotationNone';
import TextRotateVerticalIcon from '@material-ui/icons/TextRotateVertical';
import TextRotateUpIcon from '@material-ui/icons/TextRotateUp';
import TextRotationDownIcon from '@material-ui/icons/TextRotationDown';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import CloudIcon from '@material-ui/icons/Cloud';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from '@material-ui/icons/Settings';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import StopIcon from '@material-ui/icons/Stop';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import MusicNote from '@material-ui/icons/MusicNote';
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
                <ToolbarHeader title="Page Title" onMenuButtonClick={console.log} width={width}>
                    <MenuItemWrapper
                        primary
                        label="Search"
                        icon={<SearchIcon/>}
                        onClick={console.log}
                    >
                        {renderActionButtonOrMenuItem}
                    </MenuItemWrapper>
                    <MenuItemWrapper
                        primary
                        label="Notifications"
                        icon={<NotificationsIcon/>}
                        onClick={console.log}
                    >
                        {renderActionButtonOrMenuItem}
                    </MenuItemWrapper>
                    <MenuItemWrapper
                        label="Settings"
                        icon={<SettingsIcon/>}
                        onClick={console.log}
                    >
                        {renderActionButtonOrMenuItem}
                    </MenuItemWrapper>
                    <MenuItemWrapper
                        label="Exit"
                        icon={<ExitToAppIcon/>}
                        onClick={console.log}
                    >
                        {renderActionButtonOrMenuItem}
                    </MenuItemWrapper>
                </ToolbarHeader>
                <MuiTabs
                    variant="scrollable"
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
                (<Catalogue width={width}>
                    <Category label="List format" icon={<FolderOpenIcon/>}>
                        <MenuItemWrapper label="List numbered" icon={<FormatListNumberedIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="List bulleted" icon={<FormatListBulletedIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="List numbered rtl" icon={<FormatListNumberedRtlIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                    </Category>
                    <Category label="Font" icon={<FolderOpenIcon/>}>
                        <MenuItemWrapper label="Format bold" icon={<FormatBoldIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="Format italic" icon={<FormatItalicIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="Format underlined" icon={<FormatUnderlinedIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                    </Category>
                    <Category label="Indent" icon={<FolderOpenIcon/>}>
                        <MenuItemWrapper label="Indent decrease" icon={<FormatIndentDecreaseIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="Indent increase" icon={<FormatIndentIncreaseIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                    </Category>
                    <Category label="Emails" icon={<FolderOpenIcon/>}>
                        <MenuItemWrapper label="Just waves" icon={<AlternateEmailIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                    </Category>
                    <Category label="Cloud" icon={<FolderOpenIcon/>}>
                        <MenuItemWrapper label="Default" icon={<CloudIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="Upload" icon={<CloudUploadIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="Download" icon={<CloudDownloadIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                    </Category>
                    <Category label="Text alignment" icon={<FolderOpenIcon/>}>
                        <MenuItemWrapper label="Align left" icon={<FormatAlignLeftIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="Align center" icon={<FormatAlignCenterIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="Align right" icon={<FormatAlignRightIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="Align justify" icon={<FormatAlignJustifyIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                    </Category>
                    <Category label="Text rotation" icon={<FolderOpenIcon/>}>
                        <MenuItemWrapper label="Rotation none" icon={<TextRotationNoneIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="Rotate vertical" icon={<TextRotateVerticalIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="Rotate up" icon={<TextRotateUpIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                        <MenuItemWrapper label="Rotation down" icon={<TextRotationDownIcon/>}
                                         onClick={console.log}>
                            {renderToolbarButtonOrMenuItem}
                        </MenuItemWrapper>
                    </Category>
                </Catalogue>)
                }
                {activeTab === 1 && (
                    <Catalogue width={width}>
                        <Category label="Player" icon={<MusicNote/>}>
                            <MenuItemWrapper label="Desktop" icon={<SkipPreviousIcon/>}
                                             onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </MenuItemWrapper>
                            <MenuItemWrapper label="Laptop" icon={<PlayArrowIcon/>}
                                             onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </MenuItemWrapper>
                            <MenuItemWrapper label="Tablet" icon={<PauseIcon/>}
                                             onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </MenuItemWrapper>
                            <MenuItemWrapper label="Phone" icon={<StopIcon/>}
                                             onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </MenuItemWrapper>
                            <MenuItemWrapper label="Phone" icon={<SkipNextIcon/>}
                                             onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </MenuItemWrapper>
                        </Category>
                    </Catalogue>)
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

const menuItem = ({icon, label, onClick, ...otherProps}) => (
    <MenuItem color="inherit" onClick={onClick} {...otherProps}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText inset primary={label}/>
    </MenuItem>
);

Toolbar.propTypes = {
    classes: PropTypes.object.isRequired
};

//TODO create ToolbarContent and Button, hide tabs, extract init data to App
export default withWidth()(withStyles(styles)(Toolbar));
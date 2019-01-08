import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
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
import Brightness1Icon from '@material-ui/icons/Brightness1';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import MusicNote from '@material-ui/icons/MusicNote';
import IconButton from "@material-ui/core/IconButton/IconButton";
import Button from "@material-ui/core/Button/Button";
import PropTypes from 'prop-types';
import withWidth from "@material-ui/core/withWidth";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

import ToolbarHeader from './header'
import ToolbarContent from './content'
import Category from './content/catalogue/category'
import Catalogue from './content/catalogue'
import Item from './menu/item'


class Toolbar extends React.Component {
    render() {
        const {width} = this.props;

        return (
            <MuiAppBar position="static">
                <ToolbarHeader title="Page Title" onMenuButtonClick={console.log} width={width}>
                    <Item
                        label="Search"
                        icon={<SearchIcon/>}
                        onClick={console.log}
                    >
                        {renderActionButtonOrMenuItem}
                    </Item>
                    <Item
                        label="Notifications"
                        icon={<NotificationsIcon/>}
                        onClick={console.log}
                    >
                        {renderActionButtonOrMenuItem}
                    </Item>
                    <Item
                        label="Settings"
                        icon={<SettingsIcon/>}
                        onClick={console.log}
                    >
                        {renderActionButtonOrMenuItem}
                    </Item>
                    <Item
                        label="Exit"
                        icon={<ExitToAppIcon/>}
                        onClick={console.log}
                    >
                        {renderActionButtonOrMenuItem}
                    </Item>
                </ToolbarHeader>
                <ToolbarContent width={width}>
                    <Catalogue label="Catalogue" icon={<BarChartRoundedIcon/>} width={width}>
                        <Category label="List format" icon={<Brightness1Icon/>}>
                            <Item label="List numbered" icon={<FormatListNumberedIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                            <Item label="List bulleted" icon={<FormatListBulletedIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                            <Item label="List numbered rtl" icon={<FormatListNumberedRtlIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                        </Category>
                        <Category label="Font" icon={<Brightness2Icon/>}>
                            <Item label="Format bold" icon={<FormatBoldIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                            <Item label="Format italic" icon={<FormatItalicIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                            <Item label="Format underlined" icon={<FormatUnderlinedIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                        </Category>
                        <Category label="Indent" icon={<Brightness3Icon/>}>
                            <Item label="Indent decrease" icon={<FormatIndentDecreaseIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                            <Item label="Indent increase" icon={<FormatIndentIncreaseIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                        </Category>
                        <Category label="Emails" icon={<Brightness4Icon/>}>
                            <Item label="Just email" icon={<AlternateEmailIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                        </Category>
                        <Category label="Cloud" icon={<Brightness5Icon/>}>
                            <Item label="Default" icon={<CloudIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                            <Item label="Upload" icon={<CloudUploadIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                            <Item label="Download" icon={<CloudDownloadIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                        </Category>
                        <Category label="Text alignment" icon={<Brightness6Icon/>}>
                            <Item label="Align left" icon={<FormatAlignLeftIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                            <Item label="Align center" icon={<FormatAlignCenterIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                            <Item label="Align right" icon={<FormatAlignRightIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                            <Item label="Align justify" icon={<FormatAlignJustifyIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                        </Category>
                        <Category label="Text rotation" icon={<Brightness7Icon/>}>
                            <Item label="Rotation none" icon={<TextRotationNoneIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                            <Item label="Rotate vertical" icon={<TextRotateVerticalIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                            <Item label="Rotate up" icon={<TextRotateUpIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                            <Item label="Rotation down" icon={<TextRotationDownIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                        </Category>
                    </Catalogue>
                    <Catalogue label="Cattwo" icon={<SwapVerticalCircleIcon/>} width={width}>
                        <Category label="Player" icon={<MusicNote/>}>
                            <Item label="Desktop" icon={<SkipPreviousIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                            <Item label="Laptop" icon={<PlayArrowIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                            <Item label="Tablet" icon={<PauseIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                            <Item label="Phone" icon={<StopIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                            <Item label="Phone" icon={<SkipNextIcon/>}
                                  onClick={console.log}>
                                {renderToolbarButtonOrMenuItem}
                            </Item>
                        </Category>
                    </Catalogue>
                    <Catalogue label="Cattwo" icon={<SwapVerticalCircleIcon/>} width={width}/>
                    <Catalogue label="Catthree" icon={<BarChartRoundedIcon/>} width={width}/>
                    <Catalogue label="Catfour" icon={<SwapVerticalCircleIcon/>} width={width}/>
                    <Catalogue label="Catfive" icon={<BarChartRoundedIcon/>} width={width}/>
                    <Catalogue label="Catsix" icon={<SwapVerticalCircleIcon/>} width={width}/>
                    <Catalogue label="Catseven" icon={<BarChartRoundedIcon/>} width={width}/>
                    <Catalogue label="Cateight" icon={<SwapVerticalCircleIcon/>} width={width}/>
                    <Catalogue label="Catnine" icon={<BarChartRoundedIcon/>} width={width}/>
                </ToolbarContent>
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
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

//TODO create Button, extract init data to App
export default withWidth()(Toolbar);
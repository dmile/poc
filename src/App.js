import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Button from "@material-ui/core/Button/Button";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import withWidth from "@material-ui/core/withWidth";

import theme from './theme'
import Toolbar from './components/toolbar/';
import ToolbarHeader from './components/toolbar/header'
import ToolbarContent from './components/toolbar/content'
import Catalogue from './components/toolbar/content/catalogue'
import Category from './components/toolbar/content/catalogue/category'
import ItemHoc from './components/toolbar/menu/item'

import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import BarChartIcon from "@material-ui/icons/BarChart";
import Brightness1Icon from '@material-ui/icons/Brightness1';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import CloudIcon from '@material-ui/icons/Cloud';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from '@material-ui/icons/Search';
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
import TextRotationNoneIcon from '@material-ui/icons/TextRotationNone';
import TextRotateVerticalIcon from '@material-ui/icons/TextRotateVertical';
import TextRotateUpIcon from '@material-ui/icons/TextRotateUp';
import TextRotationDownIcon from '@material-ui/icons/TextRotationDown';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from '@material-ui/icons/Settings';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import StopIcon from '@material-ui/icons/Stop';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import MusicNote from '@material-ui/icons/MusicNote';


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

const header = (width) => (
    <ToolbarHeader title="Page Title" onMenuButtonClick={console.log} width={width}>
        <ItemHoc label="Search" icon={<SearchIcon/>} onClick={console.log}>
            {renderActionButtonOrMenuItem}
        </ItemHoc>
        <ItemHoc label="Notifications" icon={<NotificationsIcon/>} onClick={console.log}>
            {renderActionButtonOrMenuItem}
        </ItemHoc>
        <ItemHoc label="Settings" icon={<SettingsIcon/>} onClick={console.log}>
            {renderActionButtonOrMenuItem}
        </ItemHoc>
        <ItemHoc label="Exit" icon={<ExitToAppIcon/>} onClick={console.log}>
            {renderActionButtonOrMenuItem}
        </ItemHoc>
    </ToolbarHeader>
);

const content = (width) => (
    <ToolbarContent width={width}>
        <Catalogue label="Catalogue" icon={<BarChartIcon/>} width={width}>
            <Category label="List format" icon={<Brightness1Icon/>}>
                <ItemHoc label="List numbered" icon={<FormatListNumberedIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
                <ItemHoc label="List bulleted" icon={<FormatListBulletedIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
                <ItemHoc label="List numbered rtl" icon={<FormatListNumberedRtlIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
            </Category>
            <Category label="Font" icon={<Brightness2Icon/>}>
                <ItemHoc label="Format bold" icon={<FormatBoldIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
                <ItemHoc label="Format italic" icon={<FormatItalicIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
                <ItemHoc label="Format underlined" icon={<FormatUnderlinedIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
            </Category>
            <Category label="Indent" icon={<Brightness3Icon/>}>
                <ItemHoc label="Indent decrease" icon={<FormatIndentDecreaseIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
                <ItemHoc label="Indent increase" icon={<FormatIndentIncreaseIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
            </Category>
            <Category label="Emails" icon={<Brightness4Icon/>}>
                <ItemHoc label="Just email" icon={<AlternateEmailIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
            </Category>
            <Category label="Cloud" icon={<Brightness5Icon/>}>
                <ItemHoc label="Default" icon={<CloudIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
                <ItemHoc label="Upload" icon={<CloudUploadIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
                <ItemHoc label="Download" icon={<CloudDownloadIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
            </Category>
            <Category label="Text alignment" icon={<Brightness6Icon/>}>
                <ItemHoc label="Align left" icon={<FormatAlignLeftIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
                <ItemHoc label="Align center" icon={<FormatAlignCenterIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
                <ItemHoc label="Align right" icon={<FormatAlignRightIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
                <ItemHoc label="Align justify" icon={<FormatAlignJustifyIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
            </Category>
            <Category label="Text rotation" icon={<Brightness7Icon/>}>
                <ItemHoc label="Rotation none" icon={<TextRotationNoneIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
                <ItemHoc label="Rotate vertical" icon={<TextRotateVerticalIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
                <ItemHoc label="Rotate up" icon={<TextRotateUpIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
                <ItemHoc label="Rotation down" icon={<TextRotationDownIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
            </Category>
        </Catalogue>
        <Catalogue label="Cattwo" icon={<SwapVerticalCircleIcon/>} width={width}>
            <Category label="Player" icon={<MusicNote/>}>
                <ItemHoc label="Previous" icon={<SkipPreviousIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
                <ItemHoc label="Play" icon={<PlayArrowIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
                <ItemHoc label="Pause" icon={<PauseIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
                <ItemHoc label="Stop" icon={<StopIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
                <ItemHoc label="Next" icon={<SkipNextIcon/>} onClick={console.log}>
                    {renderToolbarButtonOrMenuItem}
                </ItemHoc>
            </Category>
        </Catalogue>
        <Catalogue label="Cattwo" icon={<SwapVerticalCircleIcon/>} width={width}/>
        <Catalogue label="Catthree" icon={<BarChartIcon/>} width={width}/>
        <Catalogue label="Catfour" icon={<SwapVerticalCircleIcon/>} width={width}/>
        <Catalogue label="Catfive" icon={<BarChartIcon/>} width={width}/>
        <Catalogue label="Catsix" icon={<SwapVerticalCircleIcon/>} width={width}/>
        <Catalogue label="Catseven" icon={<BarChartIcon/>} width={width}/>
        <Catalogue label="Cateight" icon={<SwapVerticalCircleIcon/>} width={width}/>
        <Catalogue label="Catnine" icon={<BarChartIcon/>} width={width}/>
    </ToolbarContent>
);


const App = ({width}) => (
    <React.Fragment>
        <CssBaseline>
            <MuiThemeProvider theme={theme}>
                <Toolbar header={header(width)} content={content(width)} width={width}/>
            </MuiThemeProvider>
        </CssBaseline>
    </React.Fragment>
);

//TODO fix width property passing
export default withWidth()(App);

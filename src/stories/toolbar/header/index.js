import React from 'react';
import {storiesOf} from '@storybook/react';
import IconButton from "@material-ui/core/IconButton/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from "@material-ui/icons/Notifications";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

import ToolbarHeader from "../../../components/toolbar/header";
import WidthProvider from "../../../utils/context/width/WidthProvider";
import ItemHoc from "../../../components/toolbar/menu/item";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

//TODO remove copy/paste from App
const menuItem = ({icon, label, onClick, ...otherProps}) => (
    <MenuItem color="inherit" onClick={onClick} {...otherProps}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText inset primary={label}/>
    </MenuItem>
);

const actionButton = ({label, icon, onClick}) => (
    <IconButton title={label} color="inherit" onClick={onClick}>
        {icon}
    </IconButton>
);

const renderActionButtonOrMenuItem = ({asMenuItem, ...otherProps}) => {
    return asMenuItem ? menuItem(otherProps) : actionButton(otherProps);
};


storiesOf('ToolbarHeader', module)

    .add('without buttons', () => (
        <WidthProvider>
            <ToolbarHeader title="Simple header"/>
        </WidthProvider>
    ))

    .add('with buttons', () => (
        <WidthProvider>
            <ToolbarHeader title="Header with action buttons" buttonsXs={2}>
                <IconButton title="Search" color="inherit">
                    <SearchIcon/>
                </IconButton>
                <IconButton title="Notifications" color="inherit">
                    <NotificationsIcon/>
                </IconButton>
            </ToolbarHeader>
        </WidthProvider>
    ))

    .add('with collapsed menu', () => (
        <WidthProvider>
            <ToolbarHeader title="Header with buttons and menu"
                           buttonsXs={1} buttonsSm={1} buttonsMd={1} buttonsLg={1} buttonsXl={1}>
                <ItemHoc label="Search" icon={<SearchIcon/>} onClick={console.log}>
                    {renderActionButtonOrMenuItem}
                </ItemHoc>
                <ItemHoc label="Notifications" icon={<NotificationsIcon/>}>
                    {renderActionButtonOrMenuItem}
                </ItemHoc>
            </ToolbarHeader>
        </WidthProvider>
    ));

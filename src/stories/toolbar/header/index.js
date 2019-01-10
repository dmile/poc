import React from 'react';
import {storiesOf} from '@storybook/react';
import IconButton from "@material-ui/core/IconButton/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from "@material-ui/icons/Notifications";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

import {action} from '@storybook/addon-actions';

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

const searchAction = (
    <ItemHoc label="Search" icon={<SearchIcon/>} onClick={action('Search action fired')}>
        {renderActionButtonOrMenuItem}
    </ItemHoc>
);

const notificationAction = (
    <ItemHoc label="Notifications" icon={<NotificationsIcon/>} onClick={action('Notifications action fired')}>
        {renderActionButtonOrMenuItem}
    </ItemHoc>
);


storiesOf('Toolbar/Header', module)

    .addDecorator(story => <WidthProvider>{story()}</WidthProvider>)

    .add('without buttons', () => (
        <ToolbarHeader title="Simple header" onMenuButtonClick={action('Menu button clicked')}/>
    ))

    .add('with buttons', () => (
        <ToolbarHeader title="Header with action buttons"
                       buttonsXs={2}
                       onMenuButtonClick={action('Menu button clicked')}>
            {searchAction}
            {notificationAction}
        </ToolbarHeader>
    ))

    .add('with button and menu', () => (
        <ToolbarHeader title="Header with actions buttons and menu"
                       buttonsXs={1} buttonsSm={1} buttonsMd={1} buttonsLg={1} buttonsXl={1}
                       onMenuButtonClick={action('Menu button clicked')}>
            {searchAction}
            {notificationAction}
        </ToolbarHeader>
    ));

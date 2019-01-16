import React from 'react';
import {lighten} from "@material-ui/core/styles/colorManipulator";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Menu from "@material-ui/core/Menu/Menu";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';

import Category from "./category";
import group from '../../../../utils/grouping'
import withWidth from '../../../../utils/context/width/withWidth';

const styles = (theme) => ({
    verticalDivider: {
        minWidth: '1px',
        display: 'flex',
        position: 'relative',
        backgroundColor: lighten(theme.palette.primary.main, 0.25),
        marginTop: theme.spacing.unit * 1.5,
        [theme.breakpoints.only('xs')]: {
            marginTop: theme.spacing.unit
        }
    },
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: lighten(theme.palette.primary.main, 0.37)
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    }
});

class Catalogue extends React.Component {

    state = {
        menu: null,
        expanded: []
    };

    handleMenu = (menu) => {
        this.setState({
            menu
        });
    };

    handleClose = () => {
        this.setState({
            menu: null,
            expanded: []
        });
    };

    handleExpanded = (category) => {
        let expanded = this.state.expanded;
        if (expanded.indexOf(category) !== -1) {
            expanded = expanded.filter(c => c !== category);
        } else {
            expanded = expanded.concat([category]);
        }
        this.setState({
            expanded
        });
    };

    componentDidUpdate(prevProps) {
        if (this.props.width !== prevProps.width) {
            this.handleClose();
        }
    }

    render() {
        const {children, classes, width} = this.props;
        const categories = React.Children.toArray(children);

        const colsNeededArr = categories.map(category =>
            React.Children.count(category.props.children));
        const colsTotal = this.props[colsPropName(width)];
        const colsAvailableArr = group(colsNeededArr, colsTotal);

        let categoriesEllipsis = null;
        const categoriesMoreThanColumns = categories.length > colsTotal;
        if (categoriesMoreThanColumns) {
            colsAvailableArr[colsTotal - 1] = 0; // free last col for ellipsis
            categoriesEllipsis = renderCategoriesEllipsis(categories, colsTotal, this.handleMenu);
        }

        return (
            <div className={classes.root}>
                {
                    categories.map((category, idx) => {
                        const colsAvailable = colsAvailableArr[idx];
                        const isCategoryVisible = colsAvailable > 0;
                        const isCategoryLast = idx === categories.length - 1;
                        return (isCategoryVisible && (
                            <React.Fragment key={`${category.key}_f`}>
                                {renderCategory(category, colsAvailable, this.handleMenu)}
                                {!isCategoryLast && (
                                    <div className={classes.verticalDivider}/>
                                )}
                            </React.Fragment>
                        ));
                    })
                }
                {categoriesEllipsis}
                {this.state.menu && (
                    <Menu
                        anchorEl={this.state.menu.anchorEl}
                        open={Boolean(this.state.menu)}
                        onClick={this.handleClose}
                        onClose={this.handleClose}
                        getContentAnchorEl={null}
                        anchorOrigin={{vertical: "bottom", horizontal: "center"}}
                        transformOrigin={{vertical: "top", horizontal: "center"}}
                    >
                        {
                            this.state.menu.items.map((item) =>
                                React.cloneElement(item, {asMenuItem: true}))
                        }
                        {
                            this.state.menu.categories.map(category => {
                                const isExpanded = this.state.expanded.indexOf(category) !== -1;
                                return renderCategoryMenu(category, isExpanded, this.handleExpanded, classes)
                            })
                        }
                    </Menu>)
                }
            </div>
        );
    }
}

const renderCategory = (category, colsAvailable, handleMenu) => {
    const childrenCount = React.Children.count(category.props.children);
    if (colsAvailable === childrenCount) {
        return category;
    } else if (colsAvailable === 1) {
        return renderCategoryAsButton(category, handleMenu);
    } else {
        return renderCategoryWithEllipsis(category, colsAvailable, handleMenu);
    }
};

const renderCategoryAsButton = (category, handleMenu) => {
    const {label, icon, children} = category.props;
    const items = React.Children.toArray(children);
    return (
        <Category key={category.key}>
            <Button title={label} color="inherit" onClick={(e) => {
                const menu = {
                    anchorEl: e.currentTarget,
                    items,
                    categories: []
                };
                handleMenu(menu)
            }}>
                {icon}
                <ArrowDropDownIcon fontSize="small"/>
            </Button>
        </Category>
    )
};

const renderCategoryWithEllipsis = (category, colsAvailable, handleMenu) => {
    const items = React.Children.toArray(category.props.children);
    const visibleItems = items.slice(0, colsAvailable - 1); // one column per ellipsis
    const menuItems = items.slice(colsAvailable - 1, items.length);
    return (
        <Category>
            {visibleItems}
            <EllipsisButton onClick={e => {
                const menu = {
                    anchorEl: e.currentTarget,
                    items: menuItems,
                    categories: []
                };
                handleMenu(menu);
            }}/>
        </Category>
    )
};

const EllipsisButton = ({onClick}) => (
    <Button title="More..." color="inherit" onClick={onClick}>
        <MoreHorizIcon/>
    </Button>
);

const renderCategoryMenu = (category, isExpanded, handleExpanded, classes) => {
    const {label, icon, children} = category.props;
    const onCategoryItemClick = (e) => {
        e.stopPropagation(); // prevent menu from closing
        handleExpanded(category);
    };
    return [
        <MenuItem color="inherit" onClick={onCategoryItemClick}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText inset primary={label}/>
            {isExpanded ? <ExpandLess/> : <ExpandMore/>}
        </MenuItem>
        ,
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <List disablePadding>
                {
                    React.Children.map(children, child =>
                        React.cloneElement(child, {asMenuItem: true, className: classes.nested})
                    )
                }
            </List>
        </Collapse>
    ]
};

const renderCategoriesEllipsis = (categories, colsTotal, handleMenu) => {
    const categoriesForMenu = categories.slice(colsTotal - 1, categories.length);
    return (
        <Category>
            <EllipsisButton onClick={e => {
                const menu = {
                    anchorEl: e.currentTarget,
                    items: [],
                    categories: categoriesForMenu
                };
                handleMenu(menu);
            }}/>
        </Category>
    )
};

Catalogue.defaultProps = {
    colsXs: 5,
    colsSm: 9,
    colsMd: 13,
    colsLg: 18,
    colsXl: 25
};

Catalogue.propTypes = {
    classes: PropTypes.object.isRequired,
    colsXs: PropTypes.number,
    colsSm: PropTypes.number,
    colsMd: PropTypes.number,
    colsLg: PropTypes.number,
    colsXl: PropTypes.number,
    width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const colsPropName = (width) => `cols${width.charAt(0).toUpperCase()}${width.charAt(1)}`;

//TODO simplify rendering of categories and menu
export default withWidth()(withStyles(styles, {name: 'MuiTabs'})(Catalogue));
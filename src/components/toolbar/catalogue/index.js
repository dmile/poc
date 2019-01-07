import React from 'react';
import Category from "./category";
import {lighten} from "@material-ui/core/styles/colorManipulator";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Menu from "@material-ui/core/Menu/Menu";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import group from '../../../utils/grouping'
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';

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

        let colsTotal = 0;
        if (width === 'xl') {
            colsTotal = 25;
        } else if (width === 'lg') {
            colsTotal = 18;
        } else if (width === 'md') {
            colsTotal = 13;
        } else if (width === 'sm') {
            colsTotal = 9;
        } else {
            colsTotal = 5;
        }

        return (
            <div className={classes.root}>
                {
                    renderCategories(children, colsTotal, this.handleMenu, classes)
                }
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

const renderCategories = (categories, colsTotal, handleMenu, classes) => {
    const categoriesArr = React.Children.toArray(categories);

    let categoriesForMenu = [];
    const categoriesMoreThanColumns = categoriesArr.length > colsTotal;
    if (categoriesMoreThanColumns) {
        categoriesForMenu = categoriesArr.slice(colsTotal - 1, categoriesArr.length);
    }

    const colsNeededArr = categoriesArr.map(category =>
        React.Children.count(category.props.children));
    const colsAvailableArr = group(colsNeededArr, colsTotal);
    if (categoriesMoreThanColumns) {
        colsAvailableArr[colsTotal - 1] = 0; // free last col for ellipsis
    }

    return <React.Fragment>
        {
            categoriesArr.map((category, idx) => {
                const colsAvailable = colsAvailableArr[idx];
                const isCategoryVisible = colsAvailable > 0;
                const isCategoryLast = idx === categoriesArr.length - 1;
                return (isCategoryVisible && (
                    <React.Fragment key={`${category.key}_f`}>
                        {renderCategory(category, colsAvailable, handleMenu)}
                        {!isCategoryLast && (
                            <div className={classes.verticalDivider}/>
                        )}
                    </React.Fragment>
                ))
            })
        }
        {categoriesMoreThanColumns && (
            <Category>
                <EllipsisButton onClick={e => {
                    const menu = {
                        anchorEl: e.currentTarget,
                        items: [],
                        categories: categoriesForMenu
                    };
                    handleMenu(menu);
                }}/>
            </Category>)
        }
    </React.Fragment>

};

const renderCategory = (category, colsAvailable, handleMenu) => {
    const {label, icon, children} = category.props;
    const items = React.Children.toArray(children);
    if (colsAvailable === items.length) {
        return (
            <Category>
                {items}
            </Category>
        )
    } else if (colsAvailable === 1) {
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
    } else {
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
    }
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

Catalogue.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};

//TODO add props, simplify renderCategory
export default withStyles(styles, {name: 'MuiTabs'})(Catalogue);
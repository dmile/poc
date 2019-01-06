import React from 'react';
import Category from "./category";
import {lighten} from "@material-ui/core/styles/colorManipulator";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Menu from "@material-ui/core/Menu/Menu";
import {withStyles} from '@material-ui/core/styles';
import withWidth from "@material-ui/core/withWidth";
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import group from '../../../utils/grouping'

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
    }
});

class Catalogue extends React.Component {

    state = {
        menu: null
    };

    handleMenu = (menu) => {
        this.setState({
            menu
        });
    };

    handleClose = () => {
        this.setState({
            menu: null
        });
    };

    render() {
        const {children, classes, width} = this.props;

        let colsTotal = 0;
        if (width === 'xl') {
            colsTotal = 20;
        } else if (width === 'lg') {
            colsTotal = 15;
        } else if (width === 'md') {
            colsTotal = 10;
        } else if (width === 'sm') {
            colsTotal = 7;
        } else {
            colsTotal = 5;
        }
        console.log(width + ' (' + colsTotal + ')');

        return (
            <div className={classes.root}>
                {
                    renderCategories(children, colsTotal, this.handleMenu, classes)
                }
                {(this.state.menu) &&
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
                        this.state.menu.items.map((item) => React.cloneElement(item, {asMenuItem: true}))
                    }
                </Menu>

                }
            </div>
        );
    }
}

const renderCategories = (categories, colsTotal, handleMenu, classes) => {
    const categoriesArr = React.Children.toArray(categories);
    const categoriesMoreThanColumns = categoriesArr.length > colsTotal;

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
                <Button color="inherit" onClick={(e) => {
                    const menu = {
                        anchorEl: e.currentTarget,
                        items: []
                    };
                    handleMenu(menu)
                }}>
                    <MoreHorizIcon/>
                </Button>
            </Category>)
        }
    </React.Fragment>

};

const renderCategory = (category, colsAvailable, handleMenu) => {
    const items = React.Children.toArray(category.props.children);

    if (colsAvailable === items.length) {
        console.log(category.props.name + ' added (+' + colsAvailable + ')');
        return (
            <Category>
                {items}
            </Category>
        )
    } else if (colsAvailable === 1) {
        console.log(category.props.name + ' grouped (+1)');
        return (
            <Category key={category.key}>
                <Button color="inherit" onClick={(e) => {
                    const menu = {
                        anchorEl: e.currentTarget,
                        items
                    };
                    handleMenu(menu)
                }}>
                    {category.props.icon}
                    <ArrowDropDownIcon fontSize="small"/>
                </Button>
            </Category>
        )
    } else {
        const visibleItems = items.slice(0, colsAvailable - 1); // one column per ellipsis
        const menuItems = items.slice(colsAvailable - 1, items.length);
        console.log(category.props.name + ' truncated (+' + colsAvailable + ')');
        return (
            <Category>
                {visibleItems}
                <Button color="inherit" onClick={(e) => {
                    const menu = {
                        anchorEl: e.currentTarget,
                        items: menuItems
                    };
                    handleMenu(menu)
                }}>
                    <MoreHorizIcon/>
                </Button>
            </Category>
        )
    }

};

Catalogue.propTypes = {
    classes: PropTypes.object.isRequired
};

//TODO add props, add nested menu, simplify renderCategory
export default withWidth()(withStyles(styles, {name: 'MuiTabs'})(Catalogue));
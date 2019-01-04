import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import CustomTabs from '../../customtabs'


const styles = (theme) => ({
    verticalDivider: {
        minWidth: '1px',
        display: 'flex',
        position: 'relative',
        backgroundColor: theme.palette.divider,
        marginTop: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit
    }
});

class Catalogue extends React.Component {

    render() {
        const {children, classes} = this.props;
        return (
            <CustomTabs
                scrollable
                scrollButtons="auto"
            >
                {
                    React.Children.map(children, (child, index) => {
                        const isLastChild = index === children.length - 1;
                        return isLastChild ? child : (
                            <React.Fragment>
                                {child}
                                <div className={classes.verticalDivider}/>
                            </React.Fragment>
                        );
                    })
                }
            </CustomTabs>
        );
    }
}

Catalogue.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, {name: 'MuiTabs'})(Catalogue);
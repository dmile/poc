import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import MuiTabs from '@material-ui/core/Tabs';
import MuiTab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
    return (
        <Typography component="div" style={{padding: 8 * 3}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    tabsRoot: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper
    }
});

class Tabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <MuiTabs
                        value={value}
                        onChange={this.handleChange}
                        scrollable
                        scrollButtons="on"
                    >
                        <MuiTab label="Item One"/>
                        <MuiTab label="Item Two"/>
                        <MuiTab label="Item Three"/>
                        <MuiTab label="Item Four"/>
                        <MuiTab label="Item Five"/>
                        <MuiTab label="Item Six"/>
                        <MuiTab label="Item Seven"/>
                    </MuiTabs>
                </AppBar>
                {value === 0 && <TabContainer>Item One</TabContainer>}
                {value === 1 && <TabContainer>Item Two</TabContainer>}
                {value === 2 && <TabContainer>Item Three</TabContainer>}
                {value === 3 && <TabContainer>Item Four</TabContainer>}
                {value === 4 && <TabContainer>Item Five</TabContainer>}
                {value === 5 && <TabContainer>Item Six</TabContainer>}
                {value === 6 && <TabContainer>Item Seven</TabContainer>}
            </div>
        );
    }
}

Tabs.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Tabs);

import React from 'react';
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import PropTypes from 'prop-types';
import {isWidthUp} from "@material-ui/core/withWidth";

import withWidth from '../../../utils/context/width/withWidth';

class ToolbarContent extends React.Component {

    state = {
        activeChildIdx: 0
    };

    handleTabChange = (event, value) => {
        this.setState({activeChildIdx: value});
    };

    render() {
        const {activeChildIdx} = this.state;
        const {width, children} = this.props;
        const isWidthUpSm = isWidthUp('sm', width);
        const isWidthUpMd = isWidthUp('md', width);

        return (
            <React.Fragment>
                <Tabs
                    variant="scrollable"
                    scrollButtons={isWidthUpMd ? "on" : "off"}
                    value={activeChildIdx}
                    onChange={this.handleTabChange}
                >
                    {
                        React.Children.toArray(children).map(child =>
                            <Tab
                                label={child.props.label}
                                icon={isWidthUpSm && child.props.icon}
                                key={`${child.key}_t`}
                            />
                        )
                    }

                </Tabs>
                {
                    React.Children.toArray(children)[activeChildIdx]
                }
            </React.Fragment>
        );
    }

}

ToolbarContent.propTypes = {
    width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default withWidth()(ToolbarContent);
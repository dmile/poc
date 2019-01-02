/* eslint-disable no-restricted-globals */

import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';
import classNames from 'classnames';
import EventListener from 'react-event-listener';
import debounce from 'debounce'; // < 1kb payload overhead when lodash/debounce is > 3kb.
import {detectScrollType, getNormalizedScrollLeft} from 'normalize-scroll-left';
import {componentPropType} from '@material-ui/utils';
import animate from '@material-ui/core/internal/animate';
import ScrollbarSize from '@material-ui/core/Tabs/ScrollbarSize';
import withStyles from '@material-ui/core/styles/withStyles';
import TabScrollButton from '@material-ui/core/Tabs/TabScrollButton';

export const styles = theme => ({
    /* Styles applied to the root element. */
    root: {
        overflow: 'hidden',
        minHeight: 48,
        WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
    },
    /* Styles applied to the flex container element. */
    flexContainer: {
        display: 'flex',
    },
    /* Styles applied to the flex container element if `centered={true}` & `scrollable={false}`. */
    centered: {
        justifyContent: 'center',
    },
    /* Styles applied to the tablist element. */
    scroller: {
        position: 'relative',
        display: 'inline-block',
        flex: '1 1 auto',
        whiteSpace: 'nowrap',
    },
    /* Styles applied to the tablist element if `scrollable={false}`. */
    fixed: {
        overflowX: 'hidden',
        width: '100%',
    },
    /* Styles applied to the tablist element if `scrollable={true}`. */
    scrollable: {
        overflowX: 'scroll',
    },
    /* Styles applied to the `ScrollButtonComponent` component. */
    scrollButtons: {},
    /* Styles applied to the `ScrollButtonComponent` component if `scrollButtons="auto"`. */
    scrollButtonsAuto: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    }
});

class Tabs extends React.Component {
    constructor() {
        super();
        if (typeof window !== 'undefined') {
            this.handleResize = debounce(() => {
                this.updateScrollButtonState();
            }, 166); // Corresponds to 10 frames at 60 Hz.

            this.handleTabsScroll = debounce(() => {
                this.updateScrollButtonState();
            }, 166); // Corresponds to 10 frames at 60 Hz.
        }
    }

    state = {
        scrollerStyle: {
            marginBottom: 0,
        },
        showLeftScroll: false,
        showRightScroll: false,
        mounted: false,
    };

    componentDidMount() {
        this.setState({mounted: true});
        this.updateScrollButtonState();
    }

    componentDidUpdate(prevProps, prevState) {
        this.updateScrollButtonState();
    }

    componentWillUnmount() {
        this.handleResize.clear();
        this.handleTabsScroll.clear();
    }

    getConditionalElements = () => {
        const {classes, scrollable, ScrollButtonComponent, scrollButtons, theme} = this.props;
        const conditionalElements = {};
        conditionalElements.scrollbarSizeListener = scrollable ? (
            <ScrollbarSize onChange={this.handleScrollbarSizeChange}/>
        ) : null;

        const showScrollButtons = scrollable && (scrollButtons === 'auto' || scrollButtons === 'on');

        conditionalElements.scrollButtonLeft = showScrollButtons ? (
            <ScrollButtonComponent
                direction={theme && theme.direction === 'rtl' ? 'right' : 'left'}
                onClick={this.handleLeftScrollClick}
                visible={this.state.showLeftScroll}
                className={classNames(classes.scrollButtons, {
                    [classes.scrollButtonsAuto]: scrollButtons === 'auto',
                })}
            />
        ) : null;

        conditionalElements.scrollButtonRight = showScrollButtons ? (
            <ScrollButtonComponent
                direction={theme && theme.direction === 'rtl' ? 'left' : 'right'}
                onClick={this.handleRightScrollClick}
                visible={this.state.showRightScroll}
                className={classNames(classes.scrollButtons, {
                    [classes.scrollButtonsAuto]: scrollButtons === 'auto',
                })}
            />
        ) : null;

        return conditionalElements;
    };

    getTabsMeta = (value, direction) => {
        let tabsMeta;
        if (this.tabsRef) {
            const rect = this.tabsRef.getBoundingClientRect();
            // create a new object with ClientRect class props + scrollLeft
            tabsMeta = {
                clientWidth: this.tabsRef.clientWidth,
                scrollLeft: this.tabsRef.scrollLeft,
                scrollLeftNormalized: getNormalizedScrollLeft(this.tabsRef, direction),
                scrollWidth: this.tabsRef.scrollWidth,
                left: rect.left,
                right: rect.right,
            };
        }

        let tabMeta;
        if (this.tabsRef && value !== false) {
            const children = this.tabsRef.children[0].children;

            if (children.length > 0) {
                const tab = children[this.valueToIndex.get(value)];
                warning(
                    tab,
                    [
                        `Material-UI: the value provided \`${value}\` to the Tabs component is invalid.`,
                        'None of the Tabs children have this value.',
                        this.valueToIndex.keys
                            ? `You can provide one of the following values: ${Array.from(
                            this.valueToIndex.keys(),
                            ).join(', ')}.`
                            : null,
                    ].join('\n'),
                );
                tabMeta = tab ? tab.getBoundingClientRect() : null;
            }
        }
        return {tabsMeta, tabMeta};
    };

    handleLeftScrollClick = () => {
        this.moveTabsScroll(-this.tabsRef.clientWidth);
    };

    handleRightScrollClick = () => {
        this.moveTabsScroll(this.tabsRef.clientWidth);
    };

    handleScrollbarSizeChange = scrollbarHeight => {
        this.setState({
            scrollerStyle: {
                marginBottom: -scrollbarHeight,
            },
        });
    };

    moveTabsScroll = delta => {
        const {theme} = this.props;

        const multiplier = theme.direction === 'rtl' ? -1 : 1;
        const nextScrollLeft = this.tabsRef.scrollLeft + delta * multiplier;
        // Fix for Edge
        const invert = theme.direction === 'rtl' && detectScrollType() === 'reverse' ? -1 : 1;
        this.scroll(invert * nextScrollLeft);
    };

    scrollSelectedIntoView = () => {
        const {theme, value} = this.props;
        const {tabsMeta, tabMeta} = this.getTabsMeta(value, theme.direction);

        if (!tabMeta || !tabsMeta) {
            return;
        }

        if (tabMeta.left < tabsMeta.left) {
            // left side of button is out of view
            const nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.left - tabsMeta.left);
            this.scroll(nextScrollLeft);
        } else if (tabMeta.right > tabsMeta.right) {
            // right side of button is out of view
            const nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.right - tabsMeta.right);
            this.scroll(nextScrollLeft);
        }
    };

    scroll = value => {
        animate('scrollLeft', this.tabsRef, value);
    };

    updateScrollButtonState = () => {
        const {scrollable, scrollButtons, theme} = this.props;

        if (scrollable && scrollButtons !== 'off') {
            const {scrollWidth, clientWidth} = this.tabsRef;
            const scrollLeft = getNormalizedScrollLeft(this.tabsRef, theme.direction);

            const showLeftScroll =
                theme.direction === 'rtl' ? scrollWidth > clientWidth + scrollLeft : scrollLeft > 0;

            const showRightScroll =
                theme.direction === 'rtl' ? scrollLeft > 0 : scrollWidth > clientWidth + scrollLeft;

            if (
                showLeftScroll !== this.state.showLeftScroll ||
                showRightScroll !== this.state.showRightScroll
            ) {
                this.setState({showLeftScroll, showRightScroll});
            }
        }
    };

    render() {
        const {
            centered,
            children,
            classes,
            className: classNameProp,
            component: Component,
            fullWidth,
            onChange,
            scrollable,
            ScrollButtonComponent,
            scrollButtons,
            textColor,
            theme,
            value,
            ...other
        } = this.props;

        warning(
            !centered || !scrollable,
            'Material-UI: you can not use the `centered={true}` and `scrollable={true}` properties ' +
            'at the same time on a `Tabs` component.',
        );

        const className = classNames(classes.root, classNameProp);
        const flexContainerClassName = classNames(classes.flexContainer, {
            [classes.centered]: centered && !scrollable,
        });
        const scrollerClassName = classNames(classes.scroller, {
            [classes.fixed]: !scrollable,
            [classes.scrollable]: scrollable,
        });

        const conditionalElements = this.getConditionalElements();

        return (
            <Component className={className} {...other}>
                <EventListener target="window" onResize={this.handleResize}/>
                {conditionalElements.scrollbarSizeListener}
                <div className={classes.flexContainer}>
                    {conditionalElements.scrollButtonLeft}
                    <div
                        className={scrollerClassName}
                        style={this.state.scrollerStyle}
                        ref={ref => {
                            this.tabsRef = ref;
                        }}
                        role="tablist"
                        onScroll={this.handleTabsScroll}
                    >
                        <div className={flexContainerClassName}>{children}</div>
                    </div>
                    {conditionalElements.scrollButtonRight}
                </div>
            </Component>
        );
    }
}

Tabs.propTypes = {
    /**
     * If `true`, the tabs will be centered.
     * This property is intended for large views.
     */
    centered: PropTypes.bool,
    /**
     * The content of the component.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: PropTypes.object.isRequired,
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: componentPropType,
    /**
     * If `true`, the tabs will grow to use all the available space.
     * This property is intended for small views, like on mobile.
     */
    fullWidth: PropTypes.bool,
    /**
     * Callback fired when the value changes.
     *
     * @param {object} event The event source of the callback
     * @param {number} value We default to the index of the child
     */
    onChange: PropTypes.func,
    /**
     * True invokes scrolling properties and allow for horizontally scrolling
     * (or swiping) the tab bar.
     */
    scrollable: PropTypes.bool,
    /**
     * The component used to render the scroll buttons.
     */
    ScrollButtonComponent: componentPropType,
    /**
     * Determine behavior of scroll buttons when tabs are set to scroll
     * `auto` will only present them on medium and larger viewports
     * `on` will always present them
     * `off` will never present them
     */
    scrollButtons: PropTypes.oneOf(['auto', 'on', 'off']),
    /**
     * Determines the color of the `Tab`.
     */
    textColor: PropTypes.oneOf(['secondary', 'primary', 'inherit']),
    /**
     * @ignore
     */
    theme: PropTypes.object.isRequired,
    /**
     * The value of the currently selected `Tab`.
     * If you don't want any selected `Tab`, you can set this property to `false`.
     */
    value: PropTypes.any,
};

Tabs.defaultProps = {
    centered: false,
    component: 'div',
    fullWidth: false,
    scrollable: false,
    ScrollButtonComponent: TabScrollButton,
    scrollButtons: 'auto',
    textColor: 'inherit',
};

//TODO remove me
export default withStyles(styles, {name: 'MuiTabs', withTheme: true})(Tabs);
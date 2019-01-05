import {configureViewport} from "@storybook/addon-viewport";

import theme from '../src/theme'

const {xl, lg, md, sm, xs} = theme.breakpoints.values;
const desktopWidth = (xl + lg) * 0.4;
const tablet2Width = (lg + md) * 0.5;
const tablet1Width = (md + sm) * 0.5;
const mobileWidth = (sm + xs) * 0.6;

const customViewports = {
    desktop: {
        name: 'Desktop',
        styles: {
            width: `${desktopWidth}px`
        }
    },
    tablet2: {
        name: 'Tablet 2',
        styles: {
            width: `${tablet2Width}px`
        }
    },
    tablet1: {
        name: 'Tablet 1',
        styles: {
            width: `${tablet1Width}px`
        }
    },
    mobile: {
        name: 'Mobile',
        styles: {
            width: `${mobileWidth}px`
        }
    }
};

configureViewport({
    viewports: customViewports
});
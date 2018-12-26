import {configure} from '@storybook/react';
import {configureViewport} from '@storybook/addon-viewport';

function loadStories() {
    require('../src/stories');
}

const newViewports = {
    desktop: {
        name: 'Desktop',
        styles: {
            width: '1284px'
        }
    },
    tablet2: {
        name: 'Tablet 2',
        styles: {
            width: '1080px'
        }
    },
    tablet1: {
        name: 'Tablet 1',
        styles: {
            width: '600px'
        }
    },
    mobile: {
        name: 'Mobile',
        styles: {
            width: '360px'
        }
    }
};

configureViewport({
    viewports: newViewports
});

configure(loadStories, module);

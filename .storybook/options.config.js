import {addDecorator} from '@storybook/react';
import {withOptions} from '@storybook/addon-options';

addDecorator(
    withOptions({
        name: 'JPM Design System',
        url: '#'
    })
);
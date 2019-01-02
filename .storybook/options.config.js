import {addDecorator} from '@storybook/react';
import {withOptions} from '@storybook/addon-options';

addDecorator(
    withOptions({
        name: 'Design System',
        url: '#'
    })
);
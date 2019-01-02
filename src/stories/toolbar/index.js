import React from 'react';

import {storiesOf} from '@storybook/react';
import Toolbar from "../../components/toolbar";

storiesOf('Toolbar', module)

    .add('MsWordOnlineDemo', () => (
        <Toolbar/>
    ));

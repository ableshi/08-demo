import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Routers from './touters.js';
import './main.css'

render(<Routers />,document.getElementById('root'));

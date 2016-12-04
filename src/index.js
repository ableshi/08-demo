import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Routers from './touters.js';
import './main.css'
import 'highlight.js/styles/arta.css'
import './post.css'

render(<Routers />,document.getElementById('root'));

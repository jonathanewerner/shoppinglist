import React from 'react';
import {App} from 'components';
import {Parse} from 'parse';


import {PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_ID} from '../config/parse.js';

// Insert your app's keys here:
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_ID);

React.render(<App />, document.getElementById('content'));

import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { render } from 'react-dom';

import NewsApp from './NewsApp';

const newsMountPoint = document.getElementById('news-app-mount');

const App = (
  <BrowserRouter basename='/news'>
    <NewsApp />
  </BrowserRouter>
);

render(
  App,
  newsMountPoint
);

import { epics as app } from './redux';
import { epics as challenge } from './routes/Challenges/redux';
import { epics as settings } from './routes/Settings/redux';
import { epics as nav } from './Nav/redux';
import { epics as map } from './Map/redux';
import { epics as panes } from './Panes/redux';

export default [
  ...app,
  ...challenge,
  ...settings,
  ...nav,
  ...map,
  ...panes
];

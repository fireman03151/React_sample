import _ from 'lodash/fp';

export const alertTypes = _.keyBy(_.identity)([
  'success',
  'info',
  'warning',
  'danger'
]);

export const normalizeAlertType = alertType => alertTypes[alertType] || 'info';

// interface ExpressFlash {
//   [alertType]: [String...]
// }
// interface StackFlash {
//   type: AlertType,
//   message: String
// }

export const expressToStack = _.flow(
  _.toPairs,
  _.flatMap(([ type, messages ]) => messages.map(msg => ({
    message: msg,
    type: normalizeAlertType(type)
  })))
);

export const isExpressFlash = _.flow(
  _.keys,
  _.every(type => alertTypes[type])
);

export const getFlashAction = _.flow(
  _.property('meta'),
  _.property('flash')
);

// FlashMessage
// createFlashMetaAction(payload: ExpressFlash|StackFlash
export const createFlashMetaAction = payload => {
  if (isExpressFlash(payload)) {
    payload = expressToStack(payload);
  } else {
    payload = [payload];
  }
  return { flash: { payload } };
};

export const isFlashAction = _.flow(
  getFlashAction,
  Boolean
);

import moment from 'moment-timezone';

import { dayCount } from './date-utils';
import test from 'tape';

const PST = 'America/Los_Angeles';

test('Day count between two epochs (inclusive) calculation', function(t) {
  t.plan(7);

  t.equal(
    dayCount([
      moment.utc('8/3/2015 3:00', 'M/D/YYYY H:mm').valueOf(),
      moment.utc('8/3/2015 2:00', 'M/D/YYYY H:mm').valueOf()
    ]),
    1,
    'should return 1 day given epochs of the same day'
  );

  t.equal(
    dayCount([
      moment.utc('8/3/2015 2:00', 'M/D/YYYY H:mm').valueOf(),
      moment.utc('8/3/2015 2:00', 'M/D/YYYY H:mm').valueOf()
    ]),
    1,
    'should return 1 day given same epochs'
  );

  t.equal(
    dayCount([
      moment.utc('8/4/2015 2:00', 'M/D/YYYY H:mm').valueOf(),
      moment.utc('8/3/2015 2:00', 'M/D/YYYY H:mm').valueOf()
    ]),
    2,
    'should return 2 days when there is a 24 hours difference'
  );

  t.equal(
    dayCount([
      moment.utc('8/4/2015 1:00', 'M/D/YYYY H:mm').valueOf(),
      moment.utc('8/3/2015 23:00', 'M/D/YYYY H:mm').valueOf()
    ]),
    2,
    'should return 2 days when the diff is less than 24h but different in UTC'
  );

  t.equal(
    dayCount([
      moment.utc('8/4/2015 1:00', 'M/D/YYYY H:mm').valueOf(),
      moment.utc('8/3/2015 23:00', 'M/D/YYYY H:mm').valueOf()
    ], PST),
    1,
    'should return 1 day when the diff is less than 24h ' +
      'and days are different in UTC, but given PST'
  );

  t.equal(
    dayCount([
      moment.utc('10/27/2015 1:00', 'M/D/YYYY H:mm').valueOf(),
      moment.utc('5/12/1982 1:00', 'M/D/YYYY H:mm').valueOf()
    ]),
    12222,
    'should return correct count when there is very big period'
  );

  t.equal(
    dayCount([
      moment.utc('8/4/2015 2:00', 'M/D/YYYY H:mm').valueOf(),
      moment.utc('8/3/2015 2:00', 'M/D/YYYY H:mm').valueOf()
    ]),
    2,
    'should return 2 days when there is a 24 hours difference ' +
      'between dates given `undefined` timezone'
  );
});

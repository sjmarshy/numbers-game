
import test from 'tape';
import {
    fresh
} from '../../src/js/cell';

test(`Cell :: { value :: Number
              , exhausted :: Boolean }`, t => {

    t.ok(fresh().hasOwnProperty('value'), 'A Cell has a value');
    t.ok(fresh().hasOwnProperty('exhausted'), 'A Cell can be exhausted');
    t.end();
});

import './raw';
import './fresh';
import './exhaust';

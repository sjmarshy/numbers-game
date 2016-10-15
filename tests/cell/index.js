// Cell :: { value :: Number
//         , exhausted :: Boolean }

import './raw';
import './fresh';

import test from 'tape';
import {
    fresh
} from '../../src/js/cell';

test('a cell has a value', t => {
    t.plan(1);
    t.ok(fresh().hasOwnProperty('value'));
});

test('a cell has the property exhausted', t => {
    t.plan(1);
    t.ok(fresh().hasOwnProperty('exhausted'));
});

// fresh :: Cell

import test from 'tape';
import { fresh } from '../../src/js/cell';

test('a fresh cell is not exhausted', t => {
    t.plan(1);
    t.equal(false, fresh().exhausted);
});

test('a fresh cell has a random value', t => {
    t.plan(1);
    t.ok(fresh().value !== fresh().value || fresh().value !== fresh().value);
});

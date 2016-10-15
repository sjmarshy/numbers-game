import test from 'tape';
import { fresh } from '../../src/js/cell';

test('fresh :: Cell', t => {
    t.equal(false, fresh().exhausted, 'a fresh cell is not exhausted');
    t.ok(fresh().value !== fresh().value || fresh().value !== fresh().value,
        'a fresh cell has a random value');

    t.end();
});

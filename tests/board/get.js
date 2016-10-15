import test from 'tape';
import { fresh, get } from '../../src/js/board';

// get :: Board -> Number -> Number -> Cell
test('get returns the cell described by the passed co-ordinates', t => {
    t.plan(1);

    const b = fresh();
    const expected = b.values[3];
    const actual = get(b, 3, 0);

    t.deepEqual(expected, actual);
});

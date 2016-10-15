import test from 'tape';
import { fresh, get } from '../../src/js/board';

test('get :: Board -> Number -> Number -> Cell', t => {
    t.plan(1);

    const b = fresh();
    const expected = b.values[3];
    const actual = get(b, 3, 0);

    t.deepEqual(expected, actual,
        'get returns the cell defined by co-ordinates');
});

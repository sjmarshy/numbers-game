/* eslint no-console: "off" */
import test from 'tape';
import { fresh, coordsToIndex } from '../../src/js/board';

test('coordsToIndex :: Board -> Number -> Number -> Number', t => {

    const columns = 9;
    const b = fresh(columns);
    const coords = [[3, 0]
                   ,[1, 5]
                   ,[8, 2]];

    const expected = [3, 46, 26];

    coords.forEach((coord, index) => {
        const ex = expected[index];
        t.equal(ex, coordsToIndex(b, coord[0], coord[1]),
            'it should convert from co-ordinates to an array index');
    });
    t.end();
});

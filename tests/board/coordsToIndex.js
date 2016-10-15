/* eslint no-console: "off" */
import test from 'tape';
import { fresh, coordsToIndex } from '../../src/js/board';

console.log('coordsToIndex :: Board -> Number -> Number -> Number');

test('it should convert from co-ordinates into the correct array index based on the number of columns the board has',
    t => {
        t.plan(3);

        const columns = 9;
        const b = fresh(columns);
        const coords = [[3, 0]
                       ,[1, 5]
                       ,[8, 2]];

        const expected = [3, 46, 26];

        coords.forEach((coord, index) => {
            const ex = expected[index];
            t.equal(ex, coordsToIndex(b, coord[0], coord[1]));
        });
    });

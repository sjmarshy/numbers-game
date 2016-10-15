import test from 'tape';
import { all } from 'ramda';
import range from '../../src/js/util/range';
import getRandomInteger from '../../src/js/util/getRandomInteger';

test('getRandomInteger :: Number -> Number -> Array Number', t => {
    const min = 1;
    const max = 9;
    const results = range(1, 10).map(() => getRandomInteger(min, max));

    t.ok(all(int => int % 1 === 0 && int >= min && int <= max, results),
        'always return integers between min and max');

    t.end();
});

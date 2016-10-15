import test from 'tape';
import range from '../../src/js/util/range';

test('range :: Number -> Number -> Array Number', t => {

    const a = 2;
    const b = 11;
    const arr = range(a, b);

    t.ok(arr.length === b - a + 1,
        'length should be the distance between a and b, inclusive');

    const expected = [3, 4, 5, 6, 7, 8];
    const c = 3;
    const d = 8;
    const actual = range(c, d);


    actual.map((x, i) => {
        t.ok(x === expected[i],
            'the array should be the numbers between c nad d');
    });
    t.end();
});

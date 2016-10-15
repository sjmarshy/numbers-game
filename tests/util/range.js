import test from 'tape';
import range from '../../src/js/util/range';

test('return an array the length of b - a + 1', t => {
  const a = 2;
  const b = 11;
  const arr = range(a, b);

  t.plan(1);
  t.ok(arr.length === b - a + 1);
});

test('the items of the array should be the numbers from a to b, inclusive', t => {
  const expected = [3, 4, 5, 6, 7, 8];
  const a = 3;
  const b = 8;

  const actual = range(a, b);

  t.plan(6);
  actual.map((x, i) => {
    t.ok(x === expected[i]);
  })
});

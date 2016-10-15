import test from 'tape';
import {
  raw,
  fresh
} from '../src/js/cell';

// fresh(): Cell
test('a fresh cell has a value', t => {
  t.plan(1);
  t.ok(fresh().hasOwnProperty('value'));
});

test('a cell has the property exhausted', t => {
  t.plan(1);
  t.ok(fresh().hasOwnProperty('exhausted'));
});

test('a fresh cell is not exhausted', t => {
  t.plan(1);
  t.ok(!fresh().exhausted);
});

test('a fresh cell has a random value', t => {
  t.plan(1);
  t.ok(fresh().value !== fresh().value || fresh().value !== fresh().value);
});

// raw(v: int, e: boolean): Cell
test('cell matches the inputs given', t => {
  const cell = raw(8, true);

  t.plan(2);
  t.ok(cell.value === 8, 'cell value should match the value set');
  t.ok(cell.exhausted, 'cell exhausted should match the value set')
});

test('should not allow arguments above 9', t => {
  try {
    raw(11, false);
    /* istanbul ignore next */
    t.fail('an error should be thrown for integers above 9');
  } catch (e) {
    t.pass();
  } finally {
    t.end();
  }
})

test('should not allow arguments beneath 1', t => {
  try {
    raw(0, true);
    /* istanbul ignore next */
    t.fail('an error should be thrown for integers below 1');
  } catch (e) {
    t.pass();
  } finally {
    t.end();
  }
});

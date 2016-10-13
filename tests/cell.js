import test from 'tape';
import { fresh } from '../src/js/cell';

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

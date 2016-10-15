// exhaust :: Cell -> Cell

import test from 'tape';
import { fresh, exhaust } from '../../src/js/cell';

test('should exhaust a cell', t => {
    t.plan(1);
    const cell = exhaust(fresh());
    t.equal(true, cell.exhausted);
});

test('return value should be a new cell', t => {
    t.plan(1);

    const cell = fresh();
    const exhaustedCell = exhaust(cell);
    cell.value = 0;

    t.notEqual(cell.value, exhaustedCell.value);
});

import test from 'tape';
import { fresh, exhaust } from '../../src/js/cell';

test('exhaust :: Cell -> Cell', t => {
    const cell = fresh();
    const newCell = exhaust(fresh());
    t.equal(true, newCell.exhausted, 'should exhaust a cell');

    cell.value = 0;
    t.notEqual(cell.value, newCell.value, 'should return a brand new cell');

    t.end();
});

import test from 'tape';
import { inspect } from 'util';
import { fresh as freshCell } from '../../src/js/cell';
import { fresh, get, set } from '../../src/js/board';

// set :: Board -> Number -> Number -> Cell -> Board
test('set swaps one cell for another', t => {
    t.plan(2);

    const changeCoords = [ 3, 1 ];
    const b = fresh();
    const beforeCell = get(b, changeCoords[0], changeCoords[1]);
    const newCell = freshCell();
    const newBoard = set(b, changeCoords[0], changeCoords[1], newCell);
    const inSituCell = get(newBoard, changeCoords[0], changeCoords[1]);

    t.notEqual(beforeCell, inSituCell, 'cell should not be the same cell after transformation');
    t.deepEqual(newCell, inSituCell, 'new cell should be in situ after transformation');
});

test('set returns a new Board', t => {
    t.plan(1);

    const b = fresh();
    const newCell = freshCell();
    const newBoard = set(b, 0, 0, newCell);
    newCell.value = 0;

    t.notDeepEqual(newCell, get(newBoard, 0, 0));
});

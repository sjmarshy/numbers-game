import test from 'tape';
import { fresh as freshCell } from '../../src/js/cell';
import { fresh, get, set } from '../../src/js/board';


test('set :: Board -> Number -> Number -> Cell -> Board', t => {

    const changeCoords = [ 3, 1 ];
    const b = fresh();
    const beforeCell = get(b, changeCoords[0], changeCoords[1]);
    const newCell = freshCell();
    const newBoard = set(b, changeCoords[0], changeCoords[1], newCell);
    const inSituCell = get(newBoard, changeCoords[0], changeCoords[1]);

    t.notEqual(beforeCell, inSituCell, 'cell should not be the same cell after transformation');
    t.deepEqual(newCell, inSituCell, 'new cell should be in situ after transformation');

    newCell.value = 0;

    t.notDeepEqual(newCell, get(newBoard, changeCoords[0], changeCoords[1]), 'get returns a new Cell unrelated to the cell in the board');

    t.end();
});

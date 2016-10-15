import test from 'tape';
import { fresh, get, exhaust } from '../../src/js/board';

test('exhaust :: Board -> Number -> Number -> Board', t => {

    const b = fresh();
    const beforeCell = get(b, 5, 0);
    const newBoard = exhaust(b, 5, 0);
    const afterCell = get(newBoard, 5, 0);

    t.true(afterCell.exhausted,
        'exhaust should exhaust the cell at the coordinates given');

    t.notDeepEqual(beforeCell, afterCell, 'exhaust should update a cell');

    t.end();
});

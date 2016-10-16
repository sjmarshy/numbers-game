import test from 'tape';
import { fresh, select } from '../../src/js/board';

test('select :: Board -> Number -> Number -> Board', t => {

    const b = fresh();
    const coord = [1, 1];
    const selectedBoard = select(b, ...coord);

    t.deepEqual(coord, selectedBoard.selected,
        'selecting a coordinate should set it as selected');

    t.end();
});

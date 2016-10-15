import test from 'tape';
import { fresh as freshCell } from '../../src/js/cell';
import { raw } from '../../src/js/board';

// raw :: Array Cell -> Number -> Board
test('should return a new board with the cells and number of columns provided', t => {
    t.plan(2);

    const c = freshCell();
    const b = raw([c], 1);

    t.equal(1, b.columns);
    t.deepEqual(c, b.values[0]);
});

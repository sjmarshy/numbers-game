import test from 'tape';
import { fresh as freshCell } from '../../src/js/cell';
import { raw } from '../../src/js/board';

test('raw :: Array Cell -> Number -> Board', t => {
    t.plan(2);

    const c = freshCell();
    const b = raw([c], 1);

    t.equal(1, b.columns, 'columns should be set to the value provided');
    t.deepEqual(c, b.values[0], 'cells should be set to the cells provided');
});

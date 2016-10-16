import test from 'tape';
import { fresh as freshCell } from '../../src/js/cell';
import { raw } from '../../src/js/board';

test('raw :: Array Cell -> Number -> Board', t => {
    const c = freshCell();
    const b = raw([c], 1, [9, 9]);

    t.equal(1, b.columns, 'columns should be set to the value provided');
    t.deepEqual(c, b.values[0], 'cells should be set to the cells provided');
    t.deepEqual(b.selected, [9, 9], 'should be able to set the selected through raw');
    t.ok(raw([c], 1).selected.length === 0, 'selected should default to an empty array');

    t.end();
});

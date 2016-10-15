/* istanbul ignore next */
import test from 'tape';
import { raw } from '../../src/js/cell';

test('raw :: Number -> Boolean -> Cell', t => {

    t.ok(raw(8, true).value === 8, 'cell value should match the value set');
    t.ok(raw(8, true).exhausted, 'cell exhausted should match the value set');

    try {
        raw(11, false);
        t.fail('an error should be thrown for integers above 9');
    } catch (e) {
        t.pass('should not allow arguments above 9');
    }

    try {
        raw(0, true);
        t.fail('an error should be thrown for integers below 1');
    } catch (e) {
        t.pass();
    }

    t.end();
});

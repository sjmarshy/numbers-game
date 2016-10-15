/* eslint no-console: "off" */
import test from 'tape';
import { all } from 'ramda';
import { fresh } from '../../src/js/board';

test('fresh :: Maybe Number -> Board', t => {

    t.ok(fresh().hasOwnProperty('values'), 'property: values should exist');

    t.ok(Array.isArray(fresh().values), 'property: values should be an array');

    t.ok(fresh().hasOwnProperty('columns'), 'property: columns should exist');

    t.ok(typeof fresh().columns === 'number',
        'property columns should be a number');

    t.ok(fresh().columns === 9, 'property columns should default to 9');

    t.ok(fresh(4).columns === 4, 'columns should be set to the passed value');

    t.ok(fresh().values.length === Math.floor(9 * 2.5),
        'there should be two and a half rows of values');

    t.ok(
        all(c => c.hasOwnProperty('value') && c.hasOwnProperty('exhausted'),
            fresh().values),
        'values should all be cells');

    t.end();
});

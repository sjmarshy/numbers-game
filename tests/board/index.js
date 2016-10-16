// type Board = { values :: Array Cell, columns :: Number }
import test from 'tape';
import { fresh } from '../../src/js/board';

test(`Board :: { values :: Array Cell
               , columns :: Number
               , selected :: [ Number, Number ]}`, t => {

    t.ok(fresh().hasOwnProperty('values'), 'property: values should exist');
    t.ok(Array.isArray(fresh().values), 'property: values should be an array');
    t.ok(fresh().hasOwnProperty('columns'), 'property: columns should exist');
    t.ok(typeof fresh().columns === 'number',
        'property columns should be a number');
    t.ok(fresh().hasOwnProperty('selected'), 'selected property should exist');
    t.ok(Array.isArray(fresh().selected), 'selected should be an array');
    t.ok(fresh().selected.length === 0, 'selected should be length zero');

    t.end();
});

import './coordsToIndex';

import './raw';
import './fresh';
import './get';
import './set';
import './exhaust';
import './select';

/* eslint no-console: "off" */
import test from 'tape';
import { fresh } from '../../src/js/board';

console.log('fresh :: Number -> Board');

test('a fresh board should have a values property', t => {
    const b = fresh();
    t.plan(1);
    t.ok(b.hasOwnProperty('values'), 'property: values should exist');
});

test('values should be an array', t => {
    const values = fresh().values;
    t.plan(1);
    t.ok(Array.isArray(values), 'property: values should be an array');
});

test('a fresh board should have a columns property', t => {
    const b = fresh();
    t.plan(1);
    t.ok(b.hasOwnProperty('columns'));
});

test('property columns should be a number', t => {
    const columns = fresh().columns;
    t.plan(1);
    t.ok(typeof columns === 'number');
});

test('columns should default to 9', t => {
    const b = fresh();
    t.plan(1);
    t.ok(b.columns === 9);
});

test('columns should be set to the passed value', t => {
    const num = 4;
    const b = fresh(4);
    t.plan(1);
    t.ok(b.columns === num);
});

test('there should be 2.5 rows of values', t => {
    const b = fresh(9);
    t.plan(1);
    t.ok(b.values.length === Math.floor(9 * 2.5));
});

test('values should be cells', t => {
    const b = fresh(9);
    t.plan(Math.floor(9 * 2.5));
    b.values.forEach(c => {
        t.ok(c.hasOwnProperty('value') && c.hasOwnProperty('exhausted'));
    });
});

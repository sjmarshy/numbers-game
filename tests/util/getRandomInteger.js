import test from 'tape';
import getRandomInteger from '../../src/js/util/getRandomInteger';

test('always returns integers between max and min', t => {
    const min = 1;
    const max = 9;

    t.plan(10);
    [
        getRandomInteger(min, max),
        getRandomInteger(min, max),
        getRandomInteger(min, max),
        getRandomInteger(min, max),
        getRandomInteger(min, max),
        getRandomInteger(min, max),
        getRandomInteger(min, max),
        getRandomInteger(min, max),
        getRandomInteger(min, max),
        getRandomInteger(min, max),
    ].forEach(int => {
        t.ok(int % 1 === 0 && int >= min && int <= max);
    });
});

import { clone } from 'ramda';
import {
  fresh as freshCell,
  exhaust as exhaustCell } from './cell';
import range from './util/range';

export function coordsToIndex({ columns }, x, y) {
    return (y * columns) + x;
}

export function raw(values, columns) {
    return {
        values,
        columns
    };
}

export function fresh(n = 9) {
    return raw(range(1, Math.floor(n * 2.5)).map(freshCell), n);
}

export function get(board, x, y) {
    return board.values[coordsToIndex(board, x, y)];
}

export function set(board, x, y, cell) {
    const { values } = board;
    const insertIndex = coordsToIndex(board, x, y);
    const newValues = values
        .slice(0, insertIndex)
        .concat(clone(cell))
        .concat(values.slice(insertIndex));

    return raw(newValues, 9);
}

export function exhaust(board, x, y) {
    const cell = get(board, x, y);
    return set(board, x, y, exhaustCell(cell));
}

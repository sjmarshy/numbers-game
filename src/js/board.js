import {
  fresh as freshCell,
  exhaust as exhaustCell } from './cell';
import range from './util/range';

export function coordsToIndex({ columns }, x, y) {
    return (y * columns) + x;
}

export function fresh(n = 9) {
    return {
        values: range(1, Math.floor(n * 2.5)).map(freshCell),
        columns: n
    };
}

export function get(board, x, y) {
    return board.values[coordsToIndex(board, x, y)];
}

export function set() {}

export function exhaust(board, x, y) {
    const cell = get(board, x, y);
    return set(board, x, y, exhaustCell(cell));
}

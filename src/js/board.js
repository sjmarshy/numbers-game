// @flow
import { clone } from 'ramda';
import {
    fresh as freshCell,
    exhaust as exhaustCell } from './cell';
import range from './util/range';
import type { Cell } from './cell';

export type Board = {
    values: Array<Cell>;
    columns: number;
    selected: [ number, number ] | Array<number>;
};
export function coordsToIndex({ columns }: Board, x: number, y: number): number {
    return (y * columns) + x;
}

export function raw(
    values: Array<Cell>,
    columns: number,
    selected: Array<number> | [ number, number ] = [] ): Board {

    return {
        values,
        columns,
        selected
    };
}

export function fresh(n: number = 9): Board {
    return raw(range(1, Math.floor(n * 2.5)).map(freshCell), n);
}

export function get(board: Board, x: number, y: number): Cell {
    return board.values[coordsToIndex(board, x, y)];
}

export function set(board: Board, x: number, y: number, cell: Cell): Board {
    const { values } = board;
    const insertIndex = coordsToIndex(board, x, y);
    const newValues = values
        .slice(0, insertIndex)
        .concat(clone(cell))
        .concat(values.slice(insertIndex));

    return raw(newValues, board.columns);
}

export function exhaust(board: Board, x: number, y: number): Board {
    const cell = get(board, x, y);
    return set(board, x, y, exhaustCell(cell));
}

export function select(board: Board, x: number, y: number): Board {
    return raw(board.values, board.columns, [x, y]);
}

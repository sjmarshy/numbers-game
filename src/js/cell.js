// @flow
import getRandomInteger from './util/getRandomInteger';

export type Cell = {
    value: number;
    exhausted: boolean;
}

export const raw = (value: number, exhausted: boolean): Cell => {
    if (value > 9 || value < 1) {
        throw new Error('cells cannot hold a value below 1 or above 9');
    }
    return { value, exhausted };
};

export const fresh = (): Cell => raw(getRandomInteger(1, 9), false);

export const exhaust = ({ value }: Cell) => raw(value, true);

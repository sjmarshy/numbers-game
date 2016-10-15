import getRandomInteger from './util/getRandomInteger';

export const raw = (value, exhausted) => {
  if (value > 9 || value < 1)
    throw new Error('cells cannot hold a value below 1 or above 9');
  return { value, exhausted };
};

export const fresh = () => raw(getRandomInteger(1, 9), false);

export const exhaust = () => {};

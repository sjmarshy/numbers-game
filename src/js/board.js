import { fresh as freshCell } from './cell';
import range from './util/range';

export const fresh = (n = 9) => ({
   values: range(1, Math.floor(n * 2.5)).map(freshCell),
   columns: n
});

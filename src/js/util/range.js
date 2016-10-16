// @flow
export default (frm: number, to: number): Array<number> => {
    let rangeArray = [];
    for (let i = frm; i <= to; i++) {
        rangeArray = rangeArray.concat(i);
    }
    return rangeArray;
};

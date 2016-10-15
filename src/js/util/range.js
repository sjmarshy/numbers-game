export default (frm, to) => {
  let rangeArray = [];
  for (let i = frm; i <= to; i++) {
    rangeArray = rangeArray.concat(i);
  }
  return rangeArray;
}

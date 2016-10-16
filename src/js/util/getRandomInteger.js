// @flow
export default (max: number, min: number) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);

import * as stopify from '@stopify/stopify';

const runner = stopify.stopifyLocally("1+2");
runner.g = {};
console.log("Here");
runner.run(() => { console.log("ran") });
console.log("There");

// const {add,sub} = require('./math');
import mul,{add, sub} from './math.js';
// import mul from './math.js';
import randomcolor from "randomcolor";

const color = randomcolor();
console.log("안녕 node.js");
console.log(add(2,3));
console.log(sub(5,2));
console.log(mul(2,3));
console.log(color);

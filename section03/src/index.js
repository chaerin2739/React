
// const {add, sub} = require("./math");


import{ add, sub } from  "./math.js";
import multiply from "./math.js";
//import mult, {add, sub} from "./math.js";

//console.log(moudleDate);
 console.log(add(1,2));
 console.log(sub(2,4));

console.log(multiply(1,2));


//console.log(moudleDate.add(1,2));
//console.log(moudleDate.sub(1,2));



import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

//만약 설치한 라이브러리를 삭제했다면 터미널에 num i를 쳐주면 설치했던 모든 라이브러리가 다시 깔림
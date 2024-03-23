//math 모듈

export function add(a, b) {
    return a + b;
}

export function sub(a,b) {
    return a - b;
}


export default function multiply(a,b) {
    return a *b;
}


//위의 함수는 math모듈의 default 값이 됨 그래서 이름을 바꿔도 됨
 
// //cjs(common js 모듈시스템)을 이용해서 내보내기
// module.exports = {
//     add, //add:add 첫번째 add는 내보낼 함수, 뒤에 add는 내보낼때 이름 /  같으면 뒤에 생략가능
//     sub,
// };

//export {add, sub};


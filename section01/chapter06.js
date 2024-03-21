// null 병합 연산자 ??
// -> 존재하는 값을 추려내는 기능

let var1;
let var2 =10;
let var3 =20;

let var4 = var1 ?? var2;
let var5 = var2 ?? var3;

console.log(var4);
console.log(var5);

let useName = "유채린";
let useNickName = "Chaerin";

let displayName = useName ?? useNickName; // 유저네임이 있다면 유저네임으로 아니라면 유저닉네임으로 보여라

console.log(displayName);


//typeof 연산자
//-> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var6 = 1;
var6 = "hello"
var6 = true
let t1 = typeof var6;

console.log(t1);

//삼항 영산자
// 항이 3개임
// 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환

let var7 =10;

//요구사항: 변수 res에 var7의 값의 짝수 -> "짝", 홀수="홀"

let res = var7 % 2 === 0 ? "짝수" : "홀수";
//         조건식         조건식이 참  조건식이 거짓

console.log(res);
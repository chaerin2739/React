//Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; //큰 숫자를 저장할때 사용

if(!f1) {
    console.log("falsy")
}//!(not) 을 만나 true로 출력됨

//Truthy한 값
let t1 = "hell0";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if(t4) {
    console.log("Truthy");
}

// 활용 사례

function printName(person) {
    if(!person.name) {
        console.log("person값 없음");
        return;
    }
    console.log(person.name);
}

let person = {name: "" };
printName(person);
function funcA() {
    console.log("funA");
}

let varA = funcA;
varA();
console.log(varA);

let varB = function /*funcB*/() { //익명함수
    console.log("funcB");
};

varB();

//화살표 함수
let varC = function() {
    return 1;
};

//let varC = () =>1;
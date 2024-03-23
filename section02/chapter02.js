function returnFalse() {
    console.log("False 함수");
    return false;
}

function returnTrue() {
    console.log("True 함수");
    //return true;
    return 10;
}

//단락평가 <첫번째 피연산자의 만으로도 결과값이 나온다면 뒤에 피연산자는 접근조차 하지 않는다>
console.log(returnTrue()&& returnFalse()); //and
console.log("====================");
console.log(returnFalse() || returnTrue()); //or 단락평가가 작동하지 않음. 그래서 2개 다 출력

//단락평가 활용 사례
function printName(person) {
    const name = person && person.name;
    console.log(name || "person값 없음");
}

printName({name : "유채린"});

// T || T 일 경우 앞에 있는 T 의 값 출력
// T && T 일 경우 뒤에 있는 T 의 값 출력
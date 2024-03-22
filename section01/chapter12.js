//스코프

//지역 스코프는 중괄호 안에 있는 모든것을 뜻함

let a = 1; //전역 스코프

function funcA() {
    funcB();
    let b=2; //지역 스코프
    console.log(a);

    function funcB() {
        console.log("name");
    } //중괄화 안쪽에서 만들어진 함수는 중괄호 밖에서 사용될 수 없음
}
//funcB
funcA();
//console.log(b);

if (true) {
    let c = 1;

}

for( let i =0; i <10; i++){
    let d =1;
}
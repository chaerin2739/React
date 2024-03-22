//상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black"
};

animal.age = 2;
animal.name = "까망이";

console.log(animal);

//메서드 
// ->값이 함수인 프로퍼티를 말함

const person = {
    name : "유채린",
    //메서드 선언
    // sayHi: function() {
    //     console.log("안녕");
    // }
     sayHi() {
        console.log("안녕");
    }
};

person.sayHi();
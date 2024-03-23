//배열의 구조 분해 할당
// -> 배열에 있는 값을 각각 다른 변수로 할당해주는 문법
let arr = [1,2,3];

let [one,two,three, four=4] = arr;
console.log(one,two,three, four);

//객체의 구조 분해 할당

let person = {
     name : "유채린",
     age : 23,

};

console.log(person);

let {name, age : myage, hobby="game"} = person;
console.log(name, myage, hobby);
//person.hobby = "game";
console.log(person);


//객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby}) => {
    console.log(name, age, hobby);
    
}

func(person)
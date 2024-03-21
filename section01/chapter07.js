//if 조건문
let num = 9;

if( num >= 10) {
    console.log("num은 10 이상입니다");
    console.log("조건이 참 입니다!");
}
else if(num >=5 ) {console.log("num은 5 이상입니다.");}

else {
    console.log("조건이 거짓입니다.");
}

//Switch문
//if보다 직관적이지만 비슷함

let anmal = "dog";
switch (anmal) {
    case "cat" : {
        console.log("고양이")
        break;
    }
    case "dog": {
        console.log("강아지")
        break;

    }
    case "bear": {
        console.log("곰")
        break;

    }
    default: {
        console.log("그런 동물은 모릅니다.");
    }
}
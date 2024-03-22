//콜백함수

function main(value) {
    console.log(1);
    value(); //콜백함수
    console.log("end")
}

function sub() {
    console.log("i am sub");
}

main(sub);

main(function() {
    console.log("i am sub");
})

main(() => {
    console.log("i am sub");
})

// 콜백함수의 활용
function repeat(count) {
    for(let idx =1; idx <= count; idx++) {
        console.log(idx);
    }
}

repeat(5);

console.log("=================================");

function repeatdouble(count) {
    for(let idx =1; idx <= count; idx++) {
        console.log(idx*2);
    }
}

repeatdouble(5);

//중복코드 개선코드

console.log("=================================");
console.log("=================================");


function goodrepeat(count, callback) {
    for(let idx =1; idx <= count; idx++) {
        callback(idx);
    }
}

goodrepeat(5, function(idx) {
    console.log(idx);
});
console.log("=================================");

goodrepeat(5, function(idx) {
    console.log(idx *2);
});

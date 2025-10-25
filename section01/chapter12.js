// 1. 함수 표현식

function funA() {
    console.log("A");
}

let varA = funA;
varA();

let varB = function funB(){  // 익명함수
    console.log("B");
}
varB();

// 2. 화살표 함수
let varC = (value) => {
    console.log(value)
    return value+1;
}
console.log(varC(10));
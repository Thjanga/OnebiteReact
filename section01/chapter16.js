// 1. 상수 객체
const animal = {

};
// 추가, 수정, 삭제 가능

// 2. 메서드
// -> 값이 함수인 프로퍼티
const person = {
    name : "홍길동",
    // 메서드 선언
    sayHi(){
        console.log("안녕");
    },

};

person.sayHi();
person["sayHi"]();


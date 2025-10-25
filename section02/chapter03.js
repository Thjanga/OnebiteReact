// 1. 배열의 구조 분해 할당
let arr = [1,2,3];

let [one,two,three] = arr;

// 2. 객체의 구조 분해 할당
let person = {
    name : "홍길동",
    age : 27,
    hobby : "테니스",
};

let {name,age : myAge,hobby,extra="hello"} = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name,age,hobby,extra}) => {
    console.log(name,age,hobby,extra);
};

func(person); // 객체를 넘겨야함
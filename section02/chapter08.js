// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1,2,3];
arr.forEach((item,idx,arr) => {
    console.log(idx,item*2);
});

let doubleArr = [];
arr1.forEach((item) => {
    doubleArr.push(item*2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1,2,3];
let isInclude = arr2.includes(3);

// 3. indexof
// 특정 요소의 인덱스를 찾아서 반환하는 메서드 (동일하면 가장 처음 요소 반환), 존재하지 않으면 -1, 얕은 비교 (===)
let arr3 = [1,2,3];
let index = arr3.indexOf(2);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 특정 요소의 인덱스를 반환하는 메서드, 존재하지 않으면 -1, 깊은 비교
let arr4 = [1,2,3];
arr4.findIndex((item)=> item%2==0);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [
    {name : "이정환"},
    {name : "홍길동"},
]
arr5.find((item)=>{
    item.name === "이정환"
});


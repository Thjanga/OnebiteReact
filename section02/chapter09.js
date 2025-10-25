// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name : "이정환", hobby : "테니스"},
    {name : "김효빈", hobby : "테니스"},
    {name : "홍길동", hobby : "테니독서스"},
];

const tenisPeople = arr1.filter((item)=>{
    if(item==="테니스") return true;
})

console.log(tenisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 롤백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1,2,3];
const mapResult1 = arr2.map((item,idx,arr)=>{
    console.log(idx,item);
    return item*2;
})

let names = arr1.map((item)=>item.name);

// 3. sort
// 배열의 사전순으로 정렬하는 메서드, 숫자인 경우는 콜백함수가 필요
let arr3 = [10,3,5];
arr3.sort((a,b)=>{
    // 작은걸 앞에 배치
    if(a>b){
        return 1; // b,a 배치
    } else if(a<b){
        return -1; // a,b 배치
    } else {
        return 0; // a,b 자리를 그대로 유지
    }
});

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
let arr4 = ["c","a","b"];
const sorted = arr4.toSorted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr5 = ["hi","im","winterlood"];
arr5.join(" ");

// 비동기 작업들은 자바스크립트 엔진이 아닌 WebAPIs에서 처리된다.
console.log(1);

setTimeout(() => {
    console.log(2);
}, 3000);

console.log(3);



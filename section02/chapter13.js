function add10(num){
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 실행하는 함수
        // excutor
    
        setTimeout(() => {
    
            if(typeof num === "number"){
                resolve(num+10);
            }
            else{
                reject("num이 숫자가 아닙니다.")
            }
            // console.log("안녕");
            // resolve("완료");
            // reject("에러 발생");
        }, 2000);
    });
    return promise;
}



// then 메서드는 Promise가 성공적으로 완료되었을 때 호출되는 콜백 함수를 등록한다.
// catch 메서드는 Promise가 실패했을 때 호출되는 콜백 함수를 등록한다.

// promise.then((value) => {
//     console.log("성공:", value);
// }).catch((error)=>{
//     console.log("실패:", error);
// })

// promise
//     .then((value)=>{
//         console.log("성공:", value);
//     })
//     .catch((error)=>{
//         console.log("실패:", error);
//     });

const p =add10(5);
p.then((value)=>{
    console.log(value);
    return add10(value);
}).then((value2)=>{
    console.log(value2);
}).then((value3)=>{
    console.log(value3);
}).catch((error)=>{
    console.log(error);
});
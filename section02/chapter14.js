// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 해주는 키워드

async function getData(){
    // return {
    //     name : "이정환",
    //     id : "winterlood",
    // };
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                name : "이정환",
                id : "winterlood",
            });
        },3000);
    });
}

// await
// async 함수 내부에서만 사용할 수 있는 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData(){
    const result = await getData();
    console.log(result);
}

printData();
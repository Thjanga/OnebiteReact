// 1. 콜백함수
function main(value){
    value();

}

main(()=>{
    console.log("sub");
});

// main(sub);

// 2. 콜백함수의 활용 (중복 코드를 방지할 수 있음)
function repeat(count, callback) {
    for(let idx=1; idx<=count; idx++){
        callback(idx);
    }
}

repeat(5,(idx)=>{
    console.log(idx*2);
})

// function repeatDouble(count) {
//     for(let idx=1; idx<=count; idx++){
//         console.log(idx*2);
//     }
// }


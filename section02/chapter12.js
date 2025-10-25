// function add(a,b,callback){
//     setTimeout(()=>{
//         const sum = a + b;
//         callback(sum);
//     }, 3000);
// }

// add(1, 2,(value)=>{
//     console.log(value);
// });

// 음식을 주문하는 상황
function orderFood(callback){
    setTimeout(()=>{
        const food = "떡볶이";
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback){
    setTimeout(()=>{
        const cooldownedFood = `${food} (식음)`;
        callback(cooldownedFood);
    }, 2000);
}

function freezeFood(food, callback){
    setTimeout(()=>{
        const frozenFood = `${food} (냉동)`;
        callback(frozenFood);
    }, 1500);
}

orderFood((food)=>{
    console.log(food);
    cooldownFood(food,(cooldownedFood)=>{
        console.log(cooldownedFood);
        freezeFood(cooldownedFood,(frozenFood)=>{
            console.log(frozenFood);
        });
    });
});




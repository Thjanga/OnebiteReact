function returnFalse(){
    console.log("False");
    return false;
}

function returnTrue(){
    console.log("True");
    return true;
}

// 단락 평가
console.log(returnFalse() && returnTrue()); // F and T -> F 출력
console.log(returnTrue() && returnFalse()); // T and F -> T,F 출력 why? T and F,T 둘의 결과가 다르기 때문에
console.log(returnFalse() || returnTrue()); // F or T -> T,F 출력
console.log(returnTrue() || returnFalse()); // T or F -> T 출력

// 단락 평가 활용 사례

function printName(person){
    // if(!person){
    //     console.log("person에 값이 없음");
    //     return;
    // }
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

// T or T 는 첫번째 값, T and T는 두번째 값
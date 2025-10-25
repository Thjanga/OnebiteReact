// 함수선언
function getArea(width,height) {
    let width
    let height
    let area = width * height;

    return area;
}

let area1 = getArea(10,20);
console.log(area1);

getArea(30,20);
getArea(120,200);

// 호이스팅으로 인해 함수 선언이 호출보다 밑에 있어도 오류가 나지 않음
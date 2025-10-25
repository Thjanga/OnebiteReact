// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
let date2 = new Date(1997,1,7,23,59,59);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
let date4 = new Date(ts1);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth()+1; // 0(1월) ~ 11(12월)
let date = date1.getDate();
let hours = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();
let milliseconds = date1.getMilliseconds();
let day = date1.getDay(); // 0(일) ~ 6(토)

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(11);
date1.setDate(25);
date1.setHours(15);
date1.setMinutes(30);
date1.setSeconds(45);
date1.setMilliseconds(500);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toString());
console.log(date1.toLocaleString());


// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState, useRef } from "react";

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    const countRef = useRef(0); // 렌더링과 상관없는 값
    // const count = 0; // 렌더링 될 때마다 초기화 되는 값, 컴포넌트 외부에 선언은 권장하지 않음
    const inputRef = useRef();

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);

        // console.log(e.target.name, e.target.value);
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    // console.log(input);
    const onSubmit = () => {
        if (input.name === "") {
            // 이름을 입력하는 DOM 요소 포커스
            inputRef.current.focus();
        }
    }
    return (
        <div>
            <div>
                <input value={input.name} onChange={onChange} name="name" placeholder={"이름"} ref={inputRef}></input>
                {input.name}
            </div>
            <div>
                <input type="date" value={input.birth} onChange={onChange} name="birth"></input>
                {input.birth}
            </div>
            <div>
                <select value={input.country} onChange={onChange} name="country">
                    <option value=" "></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="jp">일본</option>
                </select>
                {input.country}
            </div>
            <div>
                <textarea placeholder="자기소개" value={input.bio} onChange={onChange} name="bio" rows={10} cols={30}></textarea>
                {input.bio}
            </div>
            <button onClick={onSubmit}>제출</button>
        </div>
    );
};

export default Register;

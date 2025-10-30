// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState } from "react";

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    const onChange = (e) => {
        // console.log(e.target.name, e.target.value);
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    // console.log(input);

    return (
        <div>
            <div>
                <input value={input.name} onChange={onChange} name="name" placeholder={"이름"}></input>
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
        </div>
    );
};

export default Register;

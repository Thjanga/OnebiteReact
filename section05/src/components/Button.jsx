// props 기본값 설정
const Button = ({children,text,color="black"}) => {
    return <button style={{color}}>{text} - {color} {children}</button>;
}

export default Button;

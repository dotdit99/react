import React from "react";
import "./App.css";
// JSX(JavaScript XML) : 리액트에서 사용하는 비표준 문법
// HTML과 자바스크립트를 혼용하는 방식
// 실제 브라우저에서 실행은 Babel이라는 라이브러리를 통해 자바스크립트와 HTML로 분리되어 실행
// {} 표현식 사용 가능
// 한개의 태그로 반환해야 함.(감싸인 태그) 여러개의 태그로 구성되는 경우<></> 의미 없는 빈 태그를 넣어줘야 함

// 이름, 주소, 성별, 나이를 표현식을 사용해 출력해 보기
// 인라인 스타일링 : 리액트에서 DOM 요소에 스타일링을 적용할 때는 무자열 형태가 아니고 객체 형태로 넣어야 함
// ┗ 사용하지 않는 방식
// class 선택자는 calssName으로 사용해야 함 :
// 주소, 성별, 나이에 대한 클래스 선택자 만들고 적용하기
// 조건부 렌더링 : if 문은 사용할 수 없지만 조건부 연산자(?)를 사용해 조건에 따라 렌더링할 수 있음

const style = {
  backgroundColor: "#222",
  color: "roaylBlue",
  fontsize: "2em",
};

const JsxBasic = () => {
  const name = "홍길동";
  const addr = "천안시";
  const male = "남성";
  const age = 15;

  return (
    <>
      <h1>JSX 문법</h1>
      {name === "곰돌이" && (
        <h3 className="name">안녕하세요. 저는 {name}입니다.</h3>
      )}
      <h3 className="addr-style">{addr}</h3>
      <h3 className="gender-style">{male}</h3>
      {age > 18 ? <h4>성인 입니다. </h4> : <h4>미성년자 입니다.</h4>}
      <h3 className="age-style">{age}</h3>
    </>
  );
};

export default JsxBasic;

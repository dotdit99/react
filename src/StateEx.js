import { useState } from "react";

const NameCardEx = () => {
  // 1. 상태 관리: 여러 개의 입력값을 하나의 객체 { }로 묶어서 관리합니다.
  // 개별적으로 useState를 4번 쓰는 것보다 유지보수가 훨씬 쉽습니다.
  const [inputs, setInputs] = useState({
    name: "",
    company: "",
    addr: "",
    email: "",
  });

  // 2. 결과 표시 상태: 제출 버튼을 누르기 전까지는 화면 하단에 정보를 숨기기 위해
  // 초기값을 null로 설정합니다. (제출 시에만 데이터가 채워짐)
  const [submittedData, setSubmittedData] = useState(null);
  r;

  // 3. 구조 분해 할당: inputs 객체 내부의 값들을 꺼내서 아래 input 태그의 value에 연결합니다.
  const { name, company, addr, email } = inputs;

  // 4. 통합 이벤트 핸들러: 어떤 input에서 글자가 입력되든 이 함수 하나로 처리합니다.
  const onChange = (e) => {
    // e.target에서 해당 input의 value(입력값)와 name(이름/회사 등 태그 속성명)을 추출
    const { value, name } = e.target;

    setInputs({
      ...inputs, // 중요! '스프레드 연산자'로 기존의 데이터(나머지 필드)를 그대로 복사합니다.
      [name]: value, // 중요! 계산된 속성명 문법을 사용해, 현재 입력이 발생한 name 키값만 업데이트합니다.
    });
  };

  // 5. 제출 핸들러: 버튼 클릭 시 현재까지 입력된 'inputs' 객체 전체를 'submittedData'에 복사합니다.
  const onClick = () => {
    setSubmittedData(inputs);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>명함 정보 입력</h1>
      {/* 각 input 태그의 name 속성은 useState의 객체 키(key) 이름과 반드시 일치해야 합니다. */}
      <input name="name" placeholder="이름" value={name} onChange={onChange} />
      <br />
      <input
        name="company"
        placeholder="회사"
        value={company}
        onChange={onChange}
      />
      <br />
      <input name="addr" placeholder="주소" value={addr} onChange={onChange} />
      <br />
      <input
        name="email"
        placeholder="이메일"
        value={email}
        onChange={onChange}
      />
      <br />

      <button onClick={onClick} style={{ marginTop: "10px" }}>
        제출
      </button>

      <hr />

      {/* 6. 조건부 렌더링: submittedData가 존재할 때만(null이 아닐 때만) 우측의 <div>를 렌더링합니다. */}
      {submittedData && (
        <div
          style={{
            backgroundColor: "#f9f9f9",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          <h2>📇 입력된 명함 정보</h2>
          <p>
            <strong>이름:</strong> {submittedData.name}
          </p>
          <p>
            <strong>회사:</strong> {submittedData.company}
          </p>
          <p>
            <strong>주소:</strong> {submittedData.addr}
          </p>
          <p>
            <strong>이메일:</strong> {submittedData.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default NameCardEx;

const member = {
  name: "곰돌이",
  job: "Developer",
  addr: "경기도 수원시",
  gender: "남성",
};

// 1. 멤버 객체의 정보를 표시하기

// 2. 조건부 렌더링 : 로그인 상태이면 : const isLogin = true / false
// 환영합니다. 곰돌이님
// 오늘도 좋은 하루 되세요!

// 3. 인라인 스타일링으로 멤버 정보 스타일링

const JsxEx = () => {
  const { name, job, addr, gender } = member;
  const isLogin = true;

  // 3번 실습: 스타일 객체 생성 (카멜 케이스 주의!)
  const memberBoxStyle = {
    backgroundColor: "aliceblue", // background-color 아님!
    padding: "20px",
    borderRadius: "15px",
    border: "2px solid royalblue",
  };

  const textHighlight = {
    color: "darkblue",
    fontWeight: "bold",
  };

  return (
    // 3. 인라인 스타일링 적용 (변수 대입)
    <div style={memberBoxStyle}>
      <p>실습 예제</p>
      {/* 1. 멤버 정보 표시 + 스타일 적용 */}
      <h3 style={textHighlight}> 이름: {name} </h3>
      <h3 style={{ color: "gray" }}> 직업: {job} </h3>{" "}
      {/* 직접 넣을 땐 중괄호 두 개 {{ }} */}
      <h3> 주소: {addr} </h3>
      <h3> 성별: {gender} </h3>
      <hr />
      {/* 2. 조건부 렌더링 (오류 수정된 버전) */}
      {isLogin ? (
        <>
          <p style={{ color: "green" }}>환영합니다. {name}님</p>
          <p>오늘도 좋은 하루 되세요!</p>
        </>
      ) : (
        <p style={{ color: "red" }}>로그인이 필요합니다.</p>
      )}
    </div>
  );
};

export default JsxEx;

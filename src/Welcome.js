// 컴포넌트는 대문자로 시작해야 함 (필수 사항)
// 컴포넌트는 함수형 컴포넌트와 클래스형 컴포넌트로 나뉘는데 함수형 컴포넌트만 사용하면 됨
// 함수형 컴포넌트는 가독성이 좋고 간결함 현재는 상태관리와 생명주기 관리도 Hooks를 통해서 가능

const Welcome = ({ member }) => {
  const { name, age, addr, gender, isAdult } = member;
  return (
    <>
      <h3>이름 : {name}</h3>
      <h3> 나이: {age}</h3>
      <h3>주소:{addr}</h3>
      <h3>성별: {gender === "M" ? "남성" : "여성"}</h3>
      <h3>성인여부: {isAdult ? "성인" : "미성년자"}</h3>
    </>
  );
};

export default Welcome; // 내보내기, 다른 파일에서 import해서 사용할 수 있도록 함

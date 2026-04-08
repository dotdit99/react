import React, { useState } from "react"; // 상태 관리를 위해 useState 가져 옴

const Say = () => {
  const [message, setMessage] = useState(""); // 상태 관리 등록, 렌더링을 위해서 사용
  const [color, setColor] = useState("black"); // 상태 관리 등록, 초기값을 black으로 지정

  const onClickEnter = () => setMessage("안녕하세요.");
  return (
    <>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={() => setMessage("안녕히 가세요")}>퇴장</button>
      <h2 style={{ color }}>{message}</h2>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
      <button style={{ color: "yellow" }} onClick={() => setColor("yellow")}>
        노란색
      </button>
    </>
  );
};

export default Say; // 내보내기

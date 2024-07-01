import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const nameInput = useRef(); // useRef 훅을 사용하여 특정 DOM을 선택한다. input에 포커스.

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value, // input 요소 내부의 name과 value 속성
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
  };

  return (
    <div>
      <input
        onChange={onChange}
        name="name"
        placeholder="이름"
        value={name}
        ref={nameInput}
      ></input>
      <input
        onChange={onChange}
        name="nickname"
        placeholder="닉네임"
        value={nickname}
      ></input>
      <button onClick={onReset}>초기화</button>
      <div>
        <h1>
          값: {name} / {nickname}{" "}
        </h1>
      </div>
    </div>
  );
}

export default InputSample;

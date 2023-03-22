import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../../css/login.css";
import { useSelector } from "react-redux";
import MainLanding from "../../components/MainLanding";
import styled from "styled-components";

const LoginStyle = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: "nskr", -apple-system, "droid sans fallback",
    "Apple SD Gothic Neo", "AppleGothic", "Malgun Gothic", "맑은 고딕", Dotum,
    "돋움", sans-serif;
  background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
`;

function Login() {
  const test = useSelector((state) => state.counter);

  // useState 세팅
  const [enteredId, setEnteredId] = useState("");
  const [idValid, setIdValid] = useState(false);

  const [enteredPw, setEnteredPw] = useState("");
  const [pwValid, setPwValid] = useState(false);

  const [btnIsValid, setBtnIsValid] = useState(false);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const idRef = useRef();
  const pwRef = useRef();

  const onKeyPress = (e) => {
    if (enteredId !== "" && e.key == "Enter") {
      pwRef.current.focus();
    }
  };

  useEffect(() => {
    const idRegExp = /^[A-Za-z0-9]*$/;
    setIdValid(enteredId.length >= 6 && idRegExp.test(enteredId));
  }, [enteredId]);

  useEffect(() => {
    let state = true;
    const pwRegExp = /^[A-Za-z0-9!@#$%^&*()]*$/;

    if (!pwRegExp.test(enteredPw)) {
      state = false;
      setPwValid(state);
      return;
    }

    let num = enteredPw.search(/[0-9]/g);
    let eng = enteredPw.search(/[a-zA-Z]/gi);
    let spe = enteredPw.search(/[!@#$%^&*()]/gi);

    if ((num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0)) {
      state = false;
      setPwValid(state);
      return;
    }

    if (enteredPw.length < 8) {
      state = false;
      setPwValid(state);
      return;
    }

    setPwValid(state);
  }, [enteredPw]);

  useEffect(() => {
    if (enteredId !== "" && enteredPw !== "") {
      setBtnIsValid(true);
    } else {
      setBtnIsValid(false);
    }
  }, [enteredId, enteredPw]);

  const init = () => {
    setEnteredId("");
    setEnteredPw("");
    setIdValid(false);
    setPwValid(false);
    idRef.current.focus();
  };

  const btnGo = async () => {
    try {
      const response = await axios.get(
        "https://meal-order-4edb9-default-rtdb.firebaseio.com/meals.json"
      );
      setData(response.data);
      console.log(response.data);
    } catch (e) {
      setError(e);
    }
  };

  const newPasswordTest = async () => {
    if (enteredId === "" || enteredPw === "") {
      alert("아이디와 비밀번호를 입력해주세요");
      init();
      return;
    }

    if (!idValid) {
      alert("아이디는 영문 또는 숫자 6~10 자리로 입력해주세요");
      init();
      return;
    }

    if (!pwValid) {
      alert(
        "비밀번호는 영문, 숫자, 특수문자 중 2가지 이상을 혼합하여 8~16자리로 입력해주세요 "
      );
      init();
      return;
    }

    try {
      const response = await axios.get(
        "https://march-pilot-default-rtdb.firebaseio.com/users.json"
        //'https://meal-order-4edb9-default-rtdb.firebaseio.com/meals.json'
      );
      setData(response.data);
    } catch (e) {
      setError(e);
    }

    // console.log( typeof data );
    navigate("/main");
  };

  return (
    <>
      <LoginStyle>
        <div className="main">
          <MainLanding />

          <div className="login">
            {/* <form> */}
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="text"
              ref={idRef}
              name="enteredId"
              value={enteredId}
              onKeyPress={onKeyPress}
              onChange={(e) => setEnteredId(e.target.value)}
              maxLength={10}
              placeholder="아이디입력"
            />
            <input
              type="password"
              name="enteredPw"
              value={enteredPw}
              ref={pwRef}
              placeholder="비밀번호입력"
              onChange={(e) => setEnteredPw(e.target.value)}
              maxLength={16}
            />
            {/* <button>Login</button> */}
            {btnIsValid ? (
              <button className="button button1" onClick={newPasswordTest}>
                로그인
              </button>
            ) : (
              <button
                className="button button2"
                onClick={() => alert("테스트")}
              >
                로그인
              </button>
            )}
            {/* </form> */}
          </div>
        </div>
      </LoginStyle>
    </>
  );
}

export default Login;

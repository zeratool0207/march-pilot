import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import { useSelector } from "react-redux";
import MainAppBar from "../../components/MainAppBar";

const Main = () => {
  const test = useSelector((state) => state.counter);

  let start = 0;
  const [account, setAccount] = useState({});
  const [value, setValue] = useState(null);
  const [end, setEnd] = useState(0);

  const ref = useRef(start);

  const counter = end / 200;

  useEffect(() => {
    axiosGet();
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      count();
    }
    return () => (isMounted = false);
  }, [end]);

  const axiosGet = async () => {
    try {
      const response = await axios.get(
        "https://account-31643-default-rtdb.firebaseio.com/accounts.json"
      );
      console.log(response.data.a3);
      setAccount(response.data.a3);
      setEnd(response.data.a3.total);
    } catch (e) {
      console.log(e);
    }
  };

  const count = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + counter);
      const resultComma = result
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      if (result > end) return setValue(end);
      setValue(resultComma);
      ref.current = result;
    }
    setTimeout(count, 10);
  };

  return (
    <>
      <MainAppBar />
      <div>
        <div>{account.accNum}</div>
        <div>{account.name}</div>
        <div>{account.status}</div>
        <div>{test}</div>
        <div>{value} 원</div>
      </div>
    </>
  );
};

export default Main;

import React, { useState } from "react";
import styled from "styled-components";

const MainAppBarStyle = styled.div`
  height: 6.6rem;
  padding: 1.5rem 1.8rem 0.13rem;
  background-color: #fff;
`;

const AppBarTypo = styled.p`
  text-align: left;
  padding: 0.8rem 0 0.9rem 0.3rem;
  height: 3.8rem;
  color: #333;
  font-size: 1.5rem;
  line-height: 1.4;
  font-weight: 300;
  letter-spacing: -0.5px;
`;

const MainAppBar = () => {
  const [username, setUserName] = useState("");

  const test = () => {
    setUserName = "test";
  };

  return (
    <>
      <MainAppBarStyle>
        <AppBarTypo>{username}</AppBarTypo>
      </MainAppBarStyle>
    </>
  );
};

export default MainAppBar;

import styled from "styled-components";
import Logo from "../assets/images/bank.svg";

const LogoTitle = styled.h1`
  position: relative;
  font-size: 76px;
  color: #fff;
  text-align: center;
  padding-top: 10px;
`;

const TitleShadow = styled.span`
  position: absolute;
  color: #fff;
  display: inline-block;
  line-height: 1.8;
  padding: 0px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  opacity: 0.3;
  font-size: 52px;
  bottom: -18px;
  right: 70px;
`;

const MainLanding = () => {
  return (
    <>
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        {/* <form> */}
        <label htmlFor="chk" aria-hidden="true">
          <img src={Logo} alt="logo" />
        </label>
        <LogoTitle>
          Pilot<TitleShadow>Pilot</TitleShadow>
        </LogoTitle>
        {/* </form> */}
      </div>
    </>
  );
};

export default MainLanding;

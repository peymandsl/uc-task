import { animated } from "react-spring";
import styled, { createGlobalStyle } from "styled-components";

const Container = styled(animated.div)`
    position: relative;
    // display: flex;
    // justify-content: center;
    // padding: 100px;
    // width:100px
    background: white;
    border-radius: 5px;
    box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
    //     position: relative;
    //     padding: 25px;
    //     background: white;
    //     border-radius: 5px;
    //     cursor: pointer;
    //     box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
    //     will-change: width, height;
    //
`;

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html
   {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    user-select: none;
    background: lightblue;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Button = styled.button`
    // position: fixed;
    background: lightblue;
    padding: 20px;
`;
export { Container, Global, Button };

import React from "react";
import { Circles } from "react-loading-icons";
import styled from "styled-components";

const LoadingState: React.FC = () => {
  return (
    <Container>
      <Circles
        stroke="transparent"
        strokeOpacity={1}
        speed={1}
        fill="#742ed9"
        strokeWidth={1}
        height="3em"
      />
    </Container>
  );
};

export default LoadingState;

const Container = styled.div`
  width: calc(100vw);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(116, 46, 157, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 25;
  position: fixed;
  top: 0;
  right: 0;
`;

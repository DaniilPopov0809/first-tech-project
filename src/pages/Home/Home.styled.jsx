import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  text-align: center;
  color:#373737;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
`;

export const LinkTweets = styled(Link)`
  color: #5cd3a8;
  font-size: 44px;
  font-weight: 600;
  text-decoration: none;
  animation: blink 4s infinite;

  @keyframes blink {
    0% {
      color: #5cd3a8;
    }
    50% {
      color: #5d0594;
    }
    100% {
      color: #5cd3a8;
    }
  }
`;

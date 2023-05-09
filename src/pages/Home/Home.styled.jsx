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
  color: var(--text-color);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
`;

export const LinkTweets = styled(Link)`
  color: var(--secondary-button-color);
  font-size: 44px;
  font-weight: 600;
  text-decoration: none;
  animation: blink 4s infinite;

  @keyframes blink {
    0% {
      color: var(--secondary-button-color);
    }
    50% {
      color: var(--bar-color);
    }
    100% {
      color: var(--secondary-button-color);
    }
  }
`;

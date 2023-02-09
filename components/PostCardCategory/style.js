import styled, { css } from "styled-components";

export const PostCard = styled.div`
  ${({ imgUrl }) => css`
    width: 330.4px;
    height: 185.5px;
    background-color: black;
    border-radius: 7px;
    background: url(${imgUrl}) no-repeat center;
    background-size: cover;
    position: relative;
  `}
`;

export const TitlePost = styled.h2`
  position: absolute;
  font-size: 14pt;
  max-width: 472px;
  font-weight: 400;
  margin: auto;
  bottom: -15px;
  color: #ffffff;
  padding: 0.2rem 0.5rem;
  max-width: 90%;
  background-color: #31577f;
`;

export const PostCardContainer = styled.div`
  cursor: pointer;
`;

/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const Footer = styled.div`
  background-color: #f8f8f8;
`;
export const Logo = styled.div`
  @keyframes anim {
    0% {
      color: #000;
    }
    33% {
      color: rgb(13, 224, 183);
    }
    66% {
      color: rgb(106, 27, 154);
    }
    100% {
      color: rgb(36, 103, 217);
    }
  }
  animation-name: anim;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  font-size: 2.1em;
  font-weight: 550;
`;
export const FirstContainer = styled.div`
  padding: 2% 5%;
  a {
    color: black;
    font-weight: 550;
  }
`;
export const SecondContainer = styled.div`
  display: flex;
  padding: 2% 5%;
  @media (max-width: 550px) {
    display: block;
  }
`;
export const Line = styled.div`
  border-top: 1px solid #999;
`;
export const IconContainer = styled.div`
  margin-left: auto;
  a {
    margin: 0% 1em;
    color: black;
    text-decoration: none;
    font-size: large;
  }
`;

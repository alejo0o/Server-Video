/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const NavBar = styled.div`
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
  .logo {
    padding: 0.4% 4%;
    animation-name: anim;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    font-size: 2.1em;
    color: black;
    text-align: center;
    font-weight: 550;
    text-decoration: none;
    font-family: 'VremenaGroteskRegular', sans-serif;
  }
  .nav {
    box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.2),
      0 1px 4px rgba(0, 0, 0, 0.2), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  }
  #basic-nav-dropdown,
  #navbar-titles {
    color: black;
  }
  .items {
    font-family: 'VremenaGroteskRegular', sans-serif;
    font-weight: 640;
    margin: auto;
  }
  .option {
    font-size: 1em;
    margin: 0em 3em;
  }
  @media only screen and (max-width: 768px) {
    .option {
      margin: unset;
    }
    .dd-item {
      font-size: 0.8em;
    }
  }
`;

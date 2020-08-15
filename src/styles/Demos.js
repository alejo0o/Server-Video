import styled from 'styled-components';

export const Principal = styled.div`
  font-family: 'VremenaGroteskRegular', sans-serif;
  background-color: #f8f8f8;
  height: 30%;
  display: flex;

  @media only screen and (max-width: 500px) {
    display: block;
    height: 40%;
  }
`;
export const Icon = styled.div`
  padding-left: 6em;
  animation: animacion 0.4s 3;
  font-size: large;
  .ic{
    margin-right: 1em;
  }
  a {
    text-decoration: none;
    margin-right: 1em;
  
  }
  @media only screen and (max-width: 500px) {
    display: block;
    height: 35%;
    padding-left: 1em;
}
  @media only screen and (max-width: 768px) {
    display: block;
    height: 40%;
    padding-left: 1em;
    a {
        margin: 0.5em 3em;
        font-size: 1em;
    }
`;

export const Global = styled.div`
  width: 30%;

  h1 {
    margin: 1.5em 3.5em;
    font-weight: 700;
    font-size: 1.8em;
  }

  @keyframes animacion {
  0% {
    color: #000;
    transform: translateY(15%);
  }
  33% {
    color: rgb(13, 224, 183);
    transform: translateY(-15px);
  }
  66% {
    color: rgb(106, 27, 154);
    transform: translateY(-15px);
  }
  100% {
    color: rgb(36, 103, 217);
    transform: translateY(15px);
  }
}
  @media only screen and (max-width: 768px) {
    h1{
        margin: 2em 2.3em;
        font-size: 1.2em;
    }
`;

export const Description = styled.div`
  margin: 1.5em 3em;
  background-color: #77ddf9;
  height: 100%;
  width: 40%;
  overflow: auto;
  p {
    margin: 1.5em 1.5em;
    font-size: 1.1em;
    text-align: justify;
  }
  @media only screen and (max-width: 768px) {
    p{
        font-size: 1em;
    }
`;

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
  margin: 1.5em 6.5em;
  animation: animacion 0.4s 3;
  p{
      padding-left: 1em;
  }
  a {
    text-decoration: none;
    display: flex;
  }
  @media only screen and (max-width: 768px) {
    a {
        margin: 0.5em 3em;
        font-size: 1em;
    }
`;

export const Global = styled.div`
  width: 40%;

  h1 {
    margin: 1.5em 3em;
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
  width: 50%;
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

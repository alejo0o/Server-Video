import styled from 'styled-components';

export const CocoDiv = styled.div`
  padding: 3em;
  height: 38em;
`;
export const Main = styled.div`
  position: absolute;
  left: 25%;
  transform: translate(-50%, -50%);
`;
export const Video = styled.video`
  position: fixed;
`;
export const Canvas = styled.canvas`
  position: fixed;
  border-style: ridge;
  border-radius: 0.5em;
  -webkit-box-shadow: 15px 15px 3px 1px rgb(0, 0, 0);
  -moz-box-shadow: 15px 15px 3px 1px rgb(6, 7, 7);
  box-shadow: 15px 15px 3px 1px rgb(17, 17, 17);
`;
export const MainGraphic = styled.div`
  display: flex;
  justify-content: center;
`;
export const Graphic = styled.div`
  //padding: 2em 0em 2em 20%;
`;
export const Play = styled.button`
  border: solid 1px black;
  height: 3em;
  margin: 20% 1em 0em 1em;
`;
export const Stop = styled.button`
  border: solid 1px black;
  height: 3em;
  margin: 20% 1em 0em 1em;
`;

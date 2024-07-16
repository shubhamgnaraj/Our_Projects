import { useState } from "react";
import "./App.css";
import ButtonsContainer from "./components/ButtonsContainer";
import MainContainer from "./components/MainContainer";

function App() {
  const [bgColor, setBgColor] = useState();
  return (
    <>
      <MainContainer color={bgColor}>
        <ButtonsContainer>
          <button
            className=" bg-red-500 py-2 px-4 rounded-lg font-bold text-white"
            onClick={() => setBgColor("red")}
          >
            Red
          </button>
          <button
            className=" bg-yellow-500 py-2 px-4 rounded-lg font-bold text-white"
            onClick={() => setBgColor("yellow")}
          >
            Yellow
          </button>
          <button
            className=" bg-black py-2 px-4 rounded-lg font-bold text-white"
            onClick={() => setBgColor("black")}
          >
            Black
          </button>
          <button className=" bg-green-500 py-2 px-4 rounded-lg font-bold text-white"
          onClick={() => setBgColor('green')}
          >
            Green
          </button>
        </ButtonsContainer>
      </MainContainer>
    </>
  );
}

export default App;

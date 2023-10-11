import { useState } from "react";
import Tooltip from "./Components/Tooltip";

function App() {
  //state to store the position
  const [position, setPosition] = useState("");
  return (
    <div className="flex flex-col items-center w-screen justify-center p-5 ">
      <h1 className="m-5">Select the position to see the Tooltip</h1>
      <div className="mt-5 p-5 flex flex-wrap items-center justify-between gap-10">
        {/* four buttons to select the position on onClick */}
        <button
          value="top"
          className={position === "top" ? "bg-black text-white" : "shadow-lg"}
          onClick={(e) => {
            setPosition(e.target.value);
          }}
        >
          Top
        </button>
        <button
          value="bottom"
          className={
            position === "bottom" ? "bg-black text-white " : "shadow-lg"
          }
          onClick={(e) => {
            setPosition(e.target.value);
          }}
        >
          Bottom
        </button>
        <button
          value="left"
          className={position === "left" ? "bg-black text-white " : "shadow-lg"}
          onClick={(e) => {
            setPosition(e.target.value);
          }}
        >
          Left
        </button>
        <button
          value="right"
          className={
            position === "right" ? "bg-black text-white " : "shadow-lg"
          }
          onClick={(e) => {
            setPosition(e.target.value);
          }}
        >
          Right
        </button>
      </div>

      <div className="flex mt-5 items-center justify-between gap-4">
        {/* Tooltip component */}
        <Tooltip position={position}>
          {/* children of the Tooltip component */}
          <button className="text-blue-800 border shadow-lg m-10">
            Hover Me !
          </button>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;

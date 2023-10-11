import { useState } from "react";
import Tooltip from "./Components/Tooltip";

function App() {
  const [position, setPosition] = useState("");
  return (
    <div className="flex flex-col items-center w-screen justify-center p-5 ">
      <h1 className="m-5">Select the position to see the Tooltip</h1>
      <div className="mt-5 p-5 flex flex-wrap items-center justify-between gap-10">
        <button
          value="top"
          className={position === "top" ? "bg-black text-white" : ""}
          onClick={(e) => {
            setPosition(e.target.value);
          }}
        >
          Top
        </button>
        <button
          value="bottom"
          className={position === "bottom" ? "bg-black text-white" : ""}
          onClick={(e) => {
            setPosition(e.target.value);
          }}
        >
          Bottom
        </button>
        <button
          value="left"
          className={position === "left" ? "bg-black text-white" : ""}
          onClick={(e) => {
            setPosition(e.target.value);
          }}
        >
          Left
        </button>
        <button
          value="right"
          className={position === "right" ? "bg-black text-white" : ""}
          onClick={(e) => {
            setPosition(e.target.value);
          }}
        >
          Right
        </button>
      </div>

      <div className="flex mt-5 items-center justify-between gap-4">
        <Tooltip position={position}>
          <button className="text-blue-950 m-10">Hover Me !</button>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
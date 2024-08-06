import { useState } from "react";
import "./App.css";
import {InputBox} from "./components/index.js";

function App() {
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("https://media.istockphoto.com/id/1327569515/photo/financial-investment-concept-stack-of-coins-for-finance-investor-with-trading-graph-growth.jpg?s=2048x2048&w=is&k=20&c=4i2cUB8QkRuRoDwUH0f0VhpGLfFOoB3p2t2MsrGW2kI=")`,
        }}>
          <h1>Coin Converter</h1>
        </div>
          <InputBox />
    </>
  );
}

export default App;

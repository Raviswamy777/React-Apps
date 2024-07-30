import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState();
  function onsubmit(userColor){
    setColor(userColor)
  }

  return (
    <>
      <div className="w-full h-screen duration-1000 bg-white text-blue"  style={{backgroundColor:color}}>
        <center> <h1 className="text-9xl font-serif">Hello</h1></center>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
          <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-yellow-400 px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full bg-white shadow-lg text-black" onClick={()=>onsubmit('white')}>Normal</button>
            <button className="outline-none px-4 py-1 rounded-full bg-white shadow-lg text-black" onClick={()=>onsubmit('lightBlue')}>Light Blue</button>
            <button className="outline-none px-4 py-1 rounded-full bg-white shadow-lg text-black" onClick={()=>onsubmit('cyan')}>Cyan</button>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
}

export default App;

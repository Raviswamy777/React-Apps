import { useState, useCallback, useEffect, useRef} from "react";
import "./App.css";

function App() {
  // Background color changer Section States and functions
  const [color, setColor] = useState();
  function onsubmit(userColor) {
    setColor(userColor);
  }

  // Password Generator Section States and functions
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

    const generatePassword = useCallback(()=>{
      let pass = "", str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numberAllowed) str += "0123456789"
      if(specialCharAllowed) str += "!@#$%^&*()_+"

      for(let i=0; i<length; i++){
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char)
      }
      setPassword(pass);
    }, [length, numberAllowed, specialCharAllowed]);

    useEffect(()=>{
      generatePassword();
    }, [length, numberAllowed, specialCharAllowed]);


    const passwordRef = useRef(null);
    const copyPassword = () =>{
      window.navigator.clipboard.writeText(password);
      passwordRef.current?.select();
    }

  return (
    <>
      {/* Background color changer Section */}
      <div
        className="w-full h-screen duration-1000 bg-white text-blue rounded-lg border-4 border-orange-500"
        style={{ backgroundColor: color }}
      >
        <center>
          <h1 className="text-9xl font-serif">Hello</h1>
        </center>
        <div className=" space-x-4  mt-96 flex flex-wrap justify-center inset-x-0 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-yellow-400 px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full bg-white shadow-lg text-black"
              onClick={() => onsubmit("white")}
            >
              Normal
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full bg-white shadow-lg text-black"
              onClick={() => onsubmit("lightBlue")}
            >
              Light Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full bg-white shadow-lg text-black"
              onClick={() => onsubmit("cyan")}
            >
              Cyan
            </button>
          </div>
        </div>
      </div>
      {/* Password Generator Section States and functions */}
      <div className="h-screen">
        <div className="w-full  max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
          <h1 className="text-white text-center my-3">Password Generator </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            /> <button className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0" onClick={copyPassword}>copy</button>
          </div>
          <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={50} value={length} name="" id="" className="cursor-pointer" onChange={(e)=> setLength(e.target.value)} />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"  defaultChecked={numberAllowed} onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }} name="" id="" />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"  defaultChecked={specialCharAllowed} onChange={()=>{
              setSpecialCharAllowed((prev)=>!prev)
            }} name="" id="" />
            <label htmlFor="numbers">SCharactors</label>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

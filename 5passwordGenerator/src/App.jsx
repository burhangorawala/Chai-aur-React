import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
   //useRef hook
   const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*()_+[]{}|:,./<>?";

   
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
      window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{ 
      passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-screen mx-auto shadow-md rounded-lg px-4 my-8 bg-slate-500 text-orange-300 text-center">
        <h1 className="text-4xl text-center text-white ">Password Generator</h1>

        <div className="flex p-2">
          <input

            type="text"
            value={password}
            className="outline-none w-full p-none rounded-lg p-2"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button className="bg-red-600 text-white font-bold  rounded-lg m-2 p-2"
          onClick={copyPasswordToClipboard}
          >
            copy
          </button>
        </div>

      <div>
      <div className="flex p-1 font-bold text-lg">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />

          <label className="p-1 m-1"> Length: {length}</label>

          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={(e) => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label className="p-1 m-1" htmlFor="characterInput">
            {" "}
            Numbers{" "}
          </label>

          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={(e) => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label className="p-1 m-1" htmlFor="characterInput">
            {" "}
            Character{" "}
          </label>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;

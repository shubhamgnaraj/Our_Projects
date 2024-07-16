import { useState, useCallback, useEffect, useRef } from "react";


function App() {
  const [length, setlength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllow) str += "12345678909";
    if (charAllow) str += "%$#@*&)}{=+><";

    for (let i = 1; i <= length; i++) {
      let char = Math.round(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  useEffect(() => {
    passwordGenrator();
  }, [length, numAllow, charAllow, passwordGenrator]);

  const handleChange = (e) => {
    setlength(e.target.value);
  };

  return (
    <>
      <div className="main w-full h-screen bg-black p-10 text-white flex items-center justify-center">
        <div className="  rounded-lg p-5 bg-gray-600">
          <div className=" felx w-full mb-5">
            <input
              type="text"
              value={password}
              readOnly
              className=" rounded-xl py-3 px-3 w-96 text-black"
              placeholder="Your Password"
            />
            <button className=" shrink-0 bg-blue-500 p-3 rounded-xl">
              copy
            </button>
          </div>

          <div className="flex gap-x-6 items-center ">
            <div className=" flex items-center gap-x-2">
              <input
                type="range"
                value={length}
                min={6}
                max={100}
                onChange={handleChange}
              />
              <label>Length: {length}</label>
            </div>

            <div className="flex gap-x-2 items-center ">
              <input
                type="checkbox"
                defaultChecked={numAllow}
                onChange={() => {
                  setNumAllow((prev) => !prev);
                }}
              />
              <label htmlFor="inputNumberText">Number</label>
            </div>

            <div className="flex gap-x-2 items-center ">
              <input
                type="checkbox"
                defaultChecked={charAllow}
                onChange={() => {
                  setCharAllow((prev) => !prev);
                }}
              />
              <label htmlFor="inputNumberText">Charecter</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import VegiesProduct from "./VegiesProduct";
import EmptyMsg from "./EmptyMsg";

import VegiesInput from "./VegiesInput";

function App() {
  let [vegItem, setVegItem] = useState(["green-chilee", "palak", "methi"]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      let newVegies = e.target.value;
      let newItems = vegItem.push(newVegies)
      setVegItem(newItems)
    }
  };

  return (
    <>
      <div className=" w-full h-screen flex items-center justify-center">
        <div className=" rounded-xl  p-5 border-solid border-2  border-black">
          <div className=" gap-40">
            <div className="gap-5 h-15">
              <VegiesInput handleOnKeyDown={handleKeyDown}></VegiesInput>
            </div>
            <EmptyMsg items={vegItem}></EmptyMsg>

            <VegiesProduct items={vegItem}></VegiesProduct>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

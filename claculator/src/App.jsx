import { useState } from 'react'
import './index.css'
import Buttons from './buttons'
import InputBox from './InputBox';
function App() {

 const [currentVal, setCurrentVal] = useState()

  const handleChangeVal = (charecter) => {

    if(charecter === 'c') {
      setCurrentVal("")

    } else if (charecter === '=') {
      const result= eval(currentVal)
      setCurrentVal(result)

    } else {
      const newCurrentVal = currentVal + charecter
      setCurrentVal(newCurrentVal) 
    }

  }

  return (
    <>
    <div className='container h-screen w-full flex justify-center items-center'>
      <div className='row'>
        <InputBox changeVal={currentVal}></InputBox>
        <div className='clacButtons'>
          <Buttons  onClickBtn={handleChangeVal}></Buttons>
        </div>
      </div>

      </div>
    </>


  )
}

export default App

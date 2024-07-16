
const calcButtons = [
  "c",
  "1",
  "2",
  "+",
  "3",
  "4",
  "-",
  "5",
  "6",
  "*",
  "7",
  "8",
  "/",
  "9",
  "0",
  "=",
  ".",
];

const Buttons = ({onClickBtn}) => {

  return (<>
  {calcButtons.map((button)=> {
  return (<>
     <button key={button} onClick={() => onClickBtn(button)} className=' buttons'>{button}</button>

  </>) 
  }
    
  )}
  </>)
  
};
 
export default Buttons;

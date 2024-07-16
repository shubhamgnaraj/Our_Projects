import HeaderContainer from "../containers/HeaderContainer";
import { gsap } from 'gsap';
import { useEffect} from 'react';

function Navbar() {
  useEffect(() => {
    gsap.to('.heading', {
      x: 20,
      // opacity: 0,
      duration: 2,
    })
  })

  // }
  return (
    <HeaderContainer>
    
      <h1 className="heading text-xl capitalize font-bold">
        <span className=" text-green-700 font-bold ">&#60;</span> shubham{" "}
        <span className=" text-green-700 font-bold "> &#47;&#62;</span>
      </h1>
      <div className=" flex items-center bg-white px-1 rounded-xl relative">
      <input type="text"  className=" py-1 px-1 w-[50vh] rounded-lg text-lg outline-none" placeholder="Enter here your book name"/>
      <i className="ri-search-line text-[3vh] bg-[#b4afaf66] px-2 rounded-xl absolute right-0 py-[0.1vh]"></i>
      </div>


      <div>
      <i className="ri-handbag-line text-[3vh] font-bold text-black relative mr-6 ">
        <span className=" absolute text-[15px] bg-red-700 px-2 rounded-full text">1</span>
      </i>
      </div>
      
    </HeaderContainer>
  );
}

export default Navbar;

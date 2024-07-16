import { gsap } from 'gsap';
import { useEffect} from 'react';
function BooksContainer({children}) {

    useEffect(() => {
        gsap.to('.books-container', {
          x: 20,
          // opacity: 0,
          duration: 2,
        })
      })
    return (
        <div className="books-container p-5  h-[40vh] w-[50vh] rounded-lg  shadow-xl relative shadow-[#522413] ">
        {children}
        </div>
    )
}

export default BooksContainer;
import React from 'react'

function Main() {
  return (
    <>
    <div className="main w-full h-[calc(100%-80px)]  flex py-10 px-20">

        <div className="partOne w-1/2 h-full font-mono">
            <div className=' '>
            <h1 className=' w-[6em] font-bold uppercase text-black text-7xl pb-4 '>Your feet deserve the best </h1>

            <p className=' tracking-tighter text-black/50 w-[30em] text-start '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quis ipsam eveniet sed neque iste aut non reiciendis voluptatum molestiae quasi, ut omnis! Quia maiores doloremque voluptatem laborum perspiciatis nihil in dolore accusantium rerum voluptates! Numquam labore sapiente nam, natus sed, totam molestias, velit iure soluta amet autem nesciunt commodi.</p>
            </div>

            <div className='button flex gap-x-5 text-black mt-5' >
                <button className=' capitalize py-2 px-3 bg-red-700 text-white'>shop now</button>
                <button className=' capitalize bg-transparent  border-2 border-solid border-black py-1 px-2 '>category</button>
            </div>
        </div>

        <div className="partTwo flex justify-center items-center ">
          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="random_png_ignore_..." />
        </div>
    </div>
    </>
  )
}

export default Main
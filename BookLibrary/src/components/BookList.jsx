import BooksContainer from "../containers/BooksContainer";

function BookList({ books }) {
  return (
    <ul className=" w-full h-full flex flex-wrap gap-10">
      {books.map((book, index) => (
        <BooksContainer>
          <li key={index}>
              <img src={book.image} alt="" className=" absolute top-5 left-2 h-[35vh] shadow-xl  shadow-[#351b1bf6]"/>

              <div className=" absolute right-0 w-40 text-center top-6">
            <div className=" uppercase font-serif font-extrabold text-[3vh]">{book.title}</div>
            <div className=" capitalize font-semibold font-sans text-[1.5vh]">{book.details}</div>
            <div className=" mt-3 font-bold capitalize ">{book.author}</div>
            <div className=" font-serif font-bold ">{book.lounch}</div>
              </div>
              <button className=" absolute right-[4vh] bottom-6 bg-[hsl(132,11%,64%)] py-2 px-4 font-bold rounded-lg">Add bag</button>
          </li>
        </BooksContainer>
      ))}
    </ul>
  );
}

export default BookList;

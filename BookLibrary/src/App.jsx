import './App.css'
import BookList from './components/BookList'
import Navbar from './components/Navbar'
import ItemsContainer from './containers/ItemsContainer'
// import BooksContainer from './containers/BooksContainer'
import MainContainer from './containers/MainContainer'
import javaBook from './assets/java-book.jpg'
import pythonBook from './assets/python.jpg'
import cPlusBook from './assets/c++.jpg'


function App() {
  const books = [
    {
      image: javaBook,
      title: 'java',
      details: 'programing with java(6th Edition)',
      author: 'E balagurusamy',
      lounch: 2019
    },
    {
      image: cPlusBook,
      title: 'c++',
      details: 'programming language,4e',
      author: 'bjarne stroustrup',
      lounch: 2022

    },
    {
      image: pythonBook,
      title: 'python',
      details: 'covers fundamentals to advanced topics like OOPS exceptions, data structures files threads ',
      author: 'bjarne stroustrup',
      lounch: 2021

    }
  ]

  return (
    <>
    <MainContainer>

      <Navbar />
      <ItemsContainer>
        <BookList books={books} />
      </ItemsContainer>
      

    </MainContainer>
    </>
  )
}

export default App


import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import PostList from './components/PostList'
import PostProvider from './store/Store'

function App() {

  const [adjustItem, setAdjustItem] = useState('Home')
  return (
    <PostProvider>
    <div className='social_media_app'>
    <Sidebar adjustItem = {adjustItem} setAdjustItem={setAdjustItem}/>

    <div className=' hero_container'>
    <Header />
    {adjustItem === 'Home' ?  <PostList /> : <Form />}
    <Footer />
    </div>
    </div>
    </PostProvider>
  )
}

export default App

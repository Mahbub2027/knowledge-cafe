
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddtobookmarks = blog =>{
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const [readingTime, setReadingTime] = useState(0);

  const handleAddToMarkAsRead = time =>{
    const newReadingtime = readingTime + time;
    setReadingTime(newReadingtime)
  }

  return (
    <>    
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto'>
          <Blogs handleAddtobookmarks={handleAddtobookmarks} handleAddToMarkAsRead={handleAddToMarkAsRead}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App

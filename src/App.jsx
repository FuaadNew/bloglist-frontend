import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [newBlog, setNewBlog] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const [likes, setLikes] = useState(0)
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  const handleLogin = (event) => {
    event.preventDefault()
    console.log('login with', username, password)
  }

  const Notification = ({ message, type }) => {
    if (message === null) {
      return null
    }
    return <div className={type}>{message}</div>
  }

  if (user == null){
    return (
    <form onSubmit={handleLogin}>
    <div>
      username
      <input type="text" value={username} onChange={({target}) => setUsername(target.value)} />
    </div>
    <div>
      password
      <input type="password" value={password} onChange={({target}) => setPassword(target.value)} />
    </div>
    <button type="submit">login</button>
  </form>
    )

  }
  return (
    <div>
      <h2>blogs</h2>
      <Notification message={errorMessage} />
      
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default App
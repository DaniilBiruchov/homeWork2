import './App.css';
import PostList from './companents/PostList.jsx'
import Input from './companents/Input/Input';
import Button from './companents/Button/Button';
import { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', description: 'Programming language'},
    {id: 2, title: 'Pyton', description: 'Programming language'},
    {id: 3, title: 'PHP', description: 'Programming language'},
    {id: 4, title: 'Ruby', description: 'Programming language'},
  ]) 

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function addNewPost (event) {
    event.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      description
    }
    setPosts([...posts, newPost])
    setTitle('')
    setDescription('')
  }

  const onPostDelete = (id => {
    const resultFilter = posts.filter(post => post.id !== id)
    setPosts(resultFilter)
  })

  return (
    <div className="App">
      <PostList posts={posts} onDelete={onPostDelete}/>
      <form>
        <Input type="text" placeholder="Name post" value={title} onChange={event => setTitle(event.target.value)}/>
        <Input type="text" placeholder="Description post"  value={description} onChange={event => setDescription(event.target.value)}/>
        <Button onClick={addNewPost}>Add</Button>
      </form>
    </div>
  );
}

export default App;

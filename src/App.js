import './App.css';
import PostList from './companents/PostList.jsx'
import { useState } from 'react';
import PostForm from './companents/PostForm';
import Select from './companents/Select/Select';
import Modal from './companents/Modal/Modal';
import Button from './companents/Button/Button';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', description: 'Programming language one', isChecked: true},
    {id: 2, title: 'Python', description: 'Programming language two', isChecked: false},
    {id: 3, title: 'PHP', description: 'Programming language three', isChecked: true},
    {id: 4, title: 'Ruby', description: 'Programming language four', isChecked: false},
  ]) 

  const [selectSort, setSelectSort] = useState('')
  const [isModalActive, setIsModalActive] = useState(false)
  // const [checked, setChecked] = useState(true)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const onPostDelete = (id => {
    const resultFilter = posts.filter(post => post.id !== id)
    setPosts(resultFilter)
  })

  const sortPost = (sort) => {
    setSelectSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  const switchCheckbox = (id) => {
    const postToUpdate = posts.find(post => post.id === id)
    const others = posts.filter(post => post.id !== id)
    setPosts([...others, {...postToUpdate, isChecked: !postToUpdate.isChecked}])
  }

  return (
    <div className="App">
    <Modal 
      visible={isModalActive} 
      setVisible={setIsModalActive}>
      <PostForm create={createPost} setVisible={setIsModalActive}/>
    </Modal>
      <div>
        <Select
        value={selectSort}
        onChange={sortPost}
          defaultValue="By sorting"
          option={[
            {value: 'title', name: 'By title'},
            {value: 'description', name: 'By description'}
          ]}/>
      </div>
      <Button onClick={() => setIsModalActive(true)}>Create post</Button>
      {posts.length !==0
        ?<PostList posts={posts} onDelete={onPostDelete} onChange={switchCheckbox}/>
        :<div>The list of posts is empty</div>
      }
    </div>
  );
}

export default App;

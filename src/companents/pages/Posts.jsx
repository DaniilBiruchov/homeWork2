import '../../App.css';
import PostList from '../PostList.jsx'
import { useState , useEffect, useMemo } from 'react';
import PostForm from '../PostForm';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import PostFilter from '../PostFilter';
import PostService from '../../API/PostService';
import Loader from '../Loader/Loader';


const Posts = () => {
    const [posts, setPosts] = useState([
        // {id: 1, title: 'JS', description: 'Programming language one', isChecked: false},
        // {id: 2, title: 'Python', description: 'Programming language two', isChecked: false},
        // {id: 3, title: 'PHP', description: 'Programming language three', isChecked: false},
        // {id: 4, title: 'Ruby', description: 'Programming language four', isChecked: false},
      ]) 
    
      const [isModalActive, setIsModalActive] = useState(false)
      const [filter, setFilter] = useState({sort: '', search: ''})
      const [isPostsLoading, setIsPostsLoading] = useState(false)
      
    


      const sortedPost = useMemo(() => {
        if(filter.sort) {
          return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
      }, [filter.sort, posts])
    
      const sortedAndSearchPosts = useMemo (() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(filter.search))
      }, [filter.search, sortedPost])
    
      useEffect(() => {
        fetchPosts()
      }, [])
    
      const createPost = (newPost) => {
        setPosts([...posts, newPost])
      }
    
      const onPostDelete = (id => {
        const resultFilter = posts.filter(post => post.id !== id)
        setPosts(resultFilter)
      })
    
      const switchCheckbox = (id) => {
        const postToUpdate = posts.find(post => post.id === id)
        const others = posts.filter(post => post.id !== id)
        setPosts([...others, {...postToUpdate, isChecked: !postToUpdate.isChecked}])
      }
    
      const fetchPosts = async () => {
        setIsPostsLoading (true)
        const posts = await PostService.getAll()
        setPosts(posts)
        setIsPostsLoading (false)
      }
    return (
        <div>
            <Modal 
                visible={isModalActive} 
                setVisible={setIsModalActive}>
                <PostForm create={createPost} setVisible={setIsModalActive}/>
            </Modal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <Button onClick={() => setIsModalActive(true)}>Create post</Button>
            {isPostsLoading
            ?<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Loader/></div>
            :<PostList posts={sortedAndSearchPosts} onDelete={onPostDelete} onChange={switchCheckbox}/>
            }
        </div>
    );
};

export default Posts;
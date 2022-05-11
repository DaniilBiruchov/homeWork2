import '../../App.css';
import PostList from '../PostList.jsx'
import { useState , useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import PostForm from '../PostForm'
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import PostFilter from '../PostFilter';
import Loader from '../Loader/Loader';
import { getPostsThunk, addPostThunk, updatePostThunk, deletePostThunk } from '../../redux/PostsReducer'


const Posts = () => {
      const posts= useSelector(state => state.postsReducer.posts)
      const dispatch = useDispatch()
    
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
        dispatch(getPostsThunk())

      }, [])
    
      const createPost = (newPost) => {
        dispatch(addPostThunk(newPost))
      }

      const updateCurrentPost = (id) => {
          let newTitle = prompt()

          const newPost = {
            id: id,
            title: newTitle
          }

          dispatch(updatePostThunk(id, newPost))
      }
    
      const onPostDelete = (id => {
        dispatch(deletePostThunk(id))
      })
    
      // const switchCheckbox = (id) => {
      //   const postToUpdate = posts.find(post => post.id === id)
      //   const others = posts.filter(post => post.id !== id)
      //   // setPosts([...others, {...postToUpdate, isChecked: !postToUpdate.isChecked}])
      // }

    return (
        <div>
            <Modal visible={isModalActive} setVisible={setIsModalActive}>
                <PostForm create={createPost} setVisible={setIsModalActive}/>
            </Modal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <Button onClick={() => setIsModalActive(true)}>Create post</Button>
            {isPostsLoading
            ?<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Loader/></div>
            :<PostList posts={sortedAndSearchPosts}
            updateCurrentPost= {updateCurrentPost}
             onDelete={onPostDelete} 
            //  onChange={switchCheckbox}
             />
            }
        </div>
    );
};

export default Posts;
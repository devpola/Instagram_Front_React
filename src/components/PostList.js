import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Post from 'components/Post'

const apiUrl = 'http://localhost:8000/api/posts/'

const PostList = () => {
  /**
   * states
   */
  const [postList, setPostList] = useState([])

  /**
   * effects
   */
  useEffect(() => {
    Axios.get(apiUrl)
      .then((response) => {
        const { data } = response
        setPostList(data)
      })
      .catch((error) => {})
  }, [])

  return (
    <div>
      {postList.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

export default PostList

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useIsMounted from 'ismounted'
import DashboardLayout from '../layouts/Dashboard'
import DetailPosts from '../components/form/DetailPosts'
import { getPostById } from '../services/api'

function PostsDetail() {
  const params = useParams()
  const [post, setPost] = useState()
  const { postId } = params
  const isMounted = useIsMounted()

  useEffect(() => {
    getPostById(postId).then(
      response => {
        if (isMounted.current) setPost(response.data)
      },
    )
  }, [postId, isMounted])

  return (
    <DashboardLayout>
      { post && <DetailPosts post={post} /> }
    </DashboardLayout>
  )
}

export default PostsDetail

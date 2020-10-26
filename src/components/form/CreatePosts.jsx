/* eslint-disable jsx-a11y/label-has-for */

import React from 'react'
import { useForm } from 'react-hook-form'
import { createPost } from '../../services/api'

function CreatePost() {
  const { register, handleSubmit } = useForm()

  return (
    <form onSubmit={handleSubmit(createPost)}>
      <div>
        <label>title</label>
        <input type="text" name="title" ref={register} />
      </div>
      <div>
        <label>author</label>
        <input type="text" name="author" ref={register} />
      </div>
      <button type="submit">CreatePost</button>
    </form>
  )
}

export default CreatePost

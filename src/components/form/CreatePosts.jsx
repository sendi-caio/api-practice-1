/* eslint-disable jsx-a11y/label-has-for */

import React from 'react'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { createPost } from '../../services/api'
import TextInput from '../input/Text'
import Button from '../button/Button'
import schema from '../../validations/posts.js'

function CreatePost() {
  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(schema),
  })

  function callCreatePost(data) {
    createPost(data)
  }

  return (
    <form onSubmit={handleSubmit(callCreatePost)}>
      <TextInput label="Title" name="title" inputRef={register} error={errors.title && errors.title.message} />
      <TextInput label="Author" name="author" inputRef={register} error={errors.author && errors.author.message} />
      <Button submit color="primary">CreatePost</Button>
    </form>
  )
}

export default CreatePost

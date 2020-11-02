import Joi from 'joi'

const schema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  done: Joi.required(),
})

export default schema

import Joi from 'joi'

const schema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
})

export default schema

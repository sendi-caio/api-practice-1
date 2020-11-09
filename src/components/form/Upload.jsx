import React from 'react'
import { useForm } from 'react-hook-form'
import { upload } from '../../services/api'

function Upload() {
  const { register, handleSubmit } = useForm()

  function sendFile(data) {
    // const name = Object.keys(data) // ['name', 'profile']
    // const value = Object.values(data) // ['fakkry', FileList]

    upload(data).then(
      (response) => console.log(response),
    )
  }

  return (
    <div className="card m-3">
      <div className="card-body">
        <form onSubmit={handleSubmit(sendFile)}>
          <div className="form-group">
            <label htmlFor="profile">Profile</label>
            <input id="profile" className="form-control-file" type="file" name="profile" ref={register} />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" className="form-control" type="text" name="name" ref={register} />
          </div>
          <button className="btn btn-primary" type="submit">Save</button>
        </form>
      </div>
    </div>
  )
}

export default Upload

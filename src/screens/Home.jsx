import React, { Fragment } from 'react'
import Bar from '../components/Bar'
import CreatePosts from '../components/form/CreatePosts'
function Home() {
  return (
    <Fragment>
      <Bar />
      <div className="container">
        <CreatePosts />
      </div>
    </Fragment>
  )
}

export default Home

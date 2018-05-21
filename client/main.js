import React from 'react'
import ReactDOM from 'react-dom'
import ImageList from './components/image_list'

// Create a component
const App = () => {
  return (
    <div>
      <h1>Image List</h1>
      <ImageList />
    </div>
  )
}


Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'))
})

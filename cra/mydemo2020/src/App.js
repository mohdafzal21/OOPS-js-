import React, { Component } from 'react'
import List from './List'
import ImageGallery from './ImageGallery'
import Comment from './Comment'
const friends = ["tom1","plnt", "smacky"]
const name = "tom"
const products = [
  {productName : 'smaple ' , vote: 1},
  {productName : 'smaple ' , vote: 1},
  {productName : 'smaple ' , vote: 1}
]
const comment= {
  author : {avatarUrl : "some url", name: 'TOM'},
  date : Date.now(),
  text : "text inside the comment "
}
const  author = {avatarUrl : "some url", name: 'TOM'}

const images = ["https://images.unsplash.com/photo-1558981023-1d4b7dd8dfb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60","https://images.unsplash.com/photo-1558981023-1d4b7dd8dfb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60","https://images.unsplash.com/photo-1558981023-1d4b7dd8dfb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"]
export class App extends Component {
  render() {
    console.log("App " , this.props)
    return (
      <div>
  <h1>Hello user - { this.props.user2}</h1>
         <List friendName={name} friends={friends}  />
         <List friendName={"Max"} friends = {["newtom", "newplant" , "newMax"]}  />
         <ImageGallery  images={images}/>
         <Comment author={author}  text={'some post' } date={Date.now() }/>
         <hr/>
        <Comment author={comment.author} text={comment.text} date={comment.date}  />
      </div>
    )
  }
}

export default App

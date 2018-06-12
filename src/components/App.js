import React, { Component } from 'react';

import './App.css';

import Header from './Header/Header';
import Compose from './Compose/Compose';
import axios from 'axios'
import Post from './Post/Post.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.createPost = this.createPost.bind(this);
    this.baseURL = 'https://practiceapi.devmountain.com/api'
  }

  componentDidMount() {
    axios.get(`${this.baseURL}/posts`).then((results) => { this.setState({ posts: results.data }) })
  }

  updatePost(id,text) {
    axios.put(`${this.baseURL}/posts?id=${ id }`,{ text }).then((results)=>{this.setState({ posts: results.data })}).catch((err)=>{console.log(err)})
  }

  deletePost(id) {
    axios.delete(`${this.baseURL}/posts?id=${ id }`).then((results)=>{this.setState({posts:results.data})}).catch((err)=>{console.log(err)})

  }

  createPost(text) {
    axios.post(`${this.baseURL}/posts`,{text}).then(results=>{this.setState({posts:results.data})}).catch((err)=>{console.log(err)})

  }

  searchFn = (search) =>{
    console.log( 1111111111111, search)
    if (search !== ""){axios.get(`${this.baseURL}/posts/filter?text=${search}`).then((results)=>{this.setState({posts:results.data})}).catch(err=>{console.log(err)})}else {axios.get(`${this.baseURL}/posts`)}
    
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header searchFn={this.searchFn}/>

        <section className="App__content">

          <Compose createPostFn={this.createPost}/>
          {posts.map((post) => { return( 
          <Post key={post.id} 
          date={post.date} 
          text={post.text} 
          id={post.id}
          updatePostFn={this.updatePost}
          deletePostFn={this.deletePost} 
          /> )})}
        </section>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import pokeball from '../pokeball.png';

class Home extends Component {

  state = {
    posts : []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      this.setState({
        posts : res.data.slice(0,10)
      })
      console.log(this.state.posts)
    })
  }

  render() {
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id} >
              <img src={pokeball} alt="A pokeball"/>
              <div className="card-content">
                <Link to={'/' + post.id}>
                  <span className="card-title grey-text">{post.title}</span>
                </Link> 
                <p>{post.body}</p>
              </div>
          </div>
        )
      })
    ) : (
      <div className="center">
        No Posts Yet
      </div>
    )
    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
            {postList}
        </div>
      </div>
    )
  }
}

export default Home
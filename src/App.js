import React from 'react';

import './App.css';

export default class Posts extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  }

  renderPosts() {
    return this.state.posts.map(({ id, title, body }) => 
      <React.Fragment key={id}>
        <div className="post-item">{title}</div>
        <div className="post-item">{body}</div>
      </React.Fragment>
    )
  }

  render() {
    if (this.state.posts.length === 0) {
      return <div class="loader"></div>
    }
    
    return (
      <div className="posts-container">
        {this.renderPosts()}
      </div>
    );
  }
}
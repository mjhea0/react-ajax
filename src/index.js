import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class FetchDemo extends React.Component {
  constructor(props) {
    super(props);
    // set initial state of `posts`
    this.state = {
      posts: []
    };
  }

  getData() {
    axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
    .then((res) => {
      const posts = res.data.data.children.map((obj) => obj.data);
      // update state with `res` from the AJAX call
      this.setState({ posts });
    });
  }

  componentDidMount() {
    this.getData()
  }

  // render
  render() {
    return (
      <div>
        <h1>{`/r/${this.props.subreddit}`}</h1>
        <ul>
          {
            this.state.posts.map((post) =>
            <li key={post.id}>{post.title}</li>)
          }
        </ul>
      </div>
    );
  }

}

// mount component to the dom
ReactDOM.render(
  <FetchDemo subreddit="python"/>,
  document.getElementById('root')
);

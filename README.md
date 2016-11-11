# React AJAX example

> This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Steps

Create a new react project:

```sh
$ create-react-app react-ajax
$ cd react-ajax
$ npm start
```

Install [axios](https://github.com/mzabriskie/axios):

```sh
$ npm install axios --save
```

Remove all files in the "src" folder except *index.js*. Then add the following code to *index.js*:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class FetchDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div>
        <h1>{`/r/${this.props.subreddit}`}</h1>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <FetchDemo subreddit="reactjs"/>,
  document.getElementById('root')
);
```

Turn to your neighbor and work together to comment the code to fully understand what's happening.

Done? Add an input box to take a subreddit. Re-fire the AJAX request.

Next, separate the class to a new file called *src/fetch.js*, export the class, and update *index.js* to require the class and update the DOM.

Finally, create a new component called `GithubProfile` in a new file. After your component mounts, make an ajax call to http://api.github.com/users/ + your github username. Your component should render the username and an image of the user. You should use `componentDidMount` to make your AJAX call. Add the component to the DOM.

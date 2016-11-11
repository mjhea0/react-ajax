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

Add the import to the top of *App.js*.

Create a component called `GithubProfile`. After your component mounts, make an ajax call to http://api.github.com/users/ + your github username. Your component should render the username and an image of the user You should use `componentDidMount` to make your AJAX call.

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import reducers from './reducers';
import App from './components/app';
import PostIndex from './components/PostIndex';
import promise from 'redux-promise';
import NewPost from './components/NewPost';
import ShowPost from './components/ShowPost';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} >
      <Route path="/" component={App} >
        <IndexRoute component={PostIndex} />
        <Route path='posts/new' component={NewPost} />
        <Route path='posts/:id' component={ShowPost} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));

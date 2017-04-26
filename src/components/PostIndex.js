import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchData } from '../actions/index';
import {Link} from 'react-router';

class PostIndex extends Component{
  componentWillMount(){
    this.props.fetchData()
  }
  renderPosts(){
    return this.props.posts.map((post)=>{
      return (
          <li className='list-group-item' key={post.id}>
            <Link to={'posts/' + post.id} >
            <span className='pull-xs-right'>{post.categories}</span>
            <strong>{post.title}</strong>
            </Link>
          </li>

      )
    })
  }
  render(){
    return(
      <div>
        <div className='text-xs-right'>
          <Link to='posts/new' className='btn btn-primary'> Create new Post </Link>
        </div>
        <h3>Blog Posts</h3>
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    posts: state.posts.all
  }
}

export default connect(mapStateToProps, {fetchData: fetchData})(PostIndex);

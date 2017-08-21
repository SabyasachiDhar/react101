import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import {Link} from 'react-router'
class PostsShow extends Component{

    static contextTypes = {
        router: PropTypes.object
    }

    componentWillMount(){
        this.props.fetchPost(this.props.params.id);
    }
    onDeleteClick(){
        this.props.deletePost(this.props.params.id)
        .then(() => {this.context.router.push('/');});
    }
    render(){
        const {post} = this.props;
        //debugger;
        if(!post){
            <div>Loading.....</div>
        }
        console.log(post);
        return (
            <div>
                <Link to="/">Back to Index</Link>
                <button
                    onClick={this.onDeleteClick.bind(this)} 
                    className="btn btn-danger pull-xs-right">
                    Delete Post
                </button>
                Show Post {this.props.params.id}
                {/*<h3>{post.title}</h3>*/}
            </div>
        );
    }
}
function mapStateToProps(state){
    return{ post: state.posts.post};
}
export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
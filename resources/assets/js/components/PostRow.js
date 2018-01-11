import React, { Component } from 'react';
import Post from '../components/Post';

export default class PostRow extends Component {

    tabPosts() {
        return this.props.posts.map(function(object, i){
            return <div className="col-md-4"><Post post={object} key={'post-' + i + '-' + object.id}/></div>;
        })
    }

    render() {
        return (
            <div className="row">
                { this.tabPosts() }
            </div>
        );
    }
}

import React, { Component } from 'react';
import axios from 'axios';
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';

class HomePage extends Component {

    constructor() {
        super();
        this.state = { 
            posts: '' 
        };
    }

    tabPosts() {
        if(this.state.posts instanceof Array){
            return this.state.posts.map(function(object, i){
                return <Post post={object} key={i} />;
            })
        }
    }

    componentDidMount() {
        axios.get('/api/posts')
        .then(response => {
            this.setState({ posts: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                {this.tabPosts()}
            </div>
        );
    }
}

export default HomePage;
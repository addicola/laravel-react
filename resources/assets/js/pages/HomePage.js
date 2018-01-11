import React, { Component } from 'react';
import axios from 'axios';
import CreatePost from '../components/CreatePost';
import PostRow from '../components/PostRow';


class HomePage extends Component {

    constructor() {
        super();
        this.state = { 
            posts: '' 
        };
    }

    tabPostRows() {
        if(this.state.posts instanceof Array){

            var matrix = this.convertListToMartix(this.state.posts, 3);

            return matrix.map(function(object, i){
                return <PostRow posts={object} key={'post-row' + i} />;
            })
        }
    }

    convertListToMartix(list, elementsPerSubArray) {
        var matrix = [], i, k;

        for (i = 0, k = -1; i < list.length; i++) {
            if (i % elementsPerSubArray === 0) {
                k++;
                matrix[k] = [];
            }

            matrix[k].push(list[i]);
        }

        return matrix;
    }

    componentDidMount() {
        axios.get('/api/v1/posts')
        .then(response => {
            this.setState({ posts: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div className='container'>
                {this.tabPostRows()}
            </div>
        );
    }
}

export default HomePage;
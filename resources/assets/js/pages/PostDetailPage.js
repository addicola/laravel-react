import React, { Component } from 'react';

class PostDetailPage extends Component {

    constructor() {
        super();
        this.state = { 
            post: null
        };
    }

    componentWillMount() {
        axios.get('/api/posts/' + this.props.params.id)
        .then(response => {
            console.log(response.data);
            this.setState({ post: response.data.post });
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    componentDidMount() {
       
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div>
                                <p>{ this.state.post.title }</p>
                                <p>nedf</p>
                            </div>
                            <div className="text-right">
                                <p>User name</p>
                                <p>nedf</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostDetailPage;
import React, { Component } from 'react';

export default class PostDetailPage extends Component {

    constructor() {
        super();
        this.state = { 
            post: null
        };
    }

    componentDidMount() {
        axios.get('/api/v1/posts/' + this.props.params.id)
        .then(response => {
            this.setState({ post: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
    }


    renderPost() {
        if(this.state.post) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="post-detail-block">
                                <div className="row"> 
                                    <div className="col-md-8"><img src={'http://placehold.it/800x400'} alt="img" className="img-responsive"/></div>
                                    <div className="col-md-4">
                                        <div className="post-header-date">
                                            <div className="post-header-month">JAN</div>
                                            <div className="post-header-day">13</div>
                                            <div className="post-header-title">{ this.state.post.title }</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hr-custom" />
                                <div className="row post-body-description">   
                                    <div className="col-md-12 post-detail-description">DESCRIPTION</div>   
                                    <div className="col-md-12">{ this.state.post.body }</div>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }   
    }

    renderCreate() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="post-detail-block-create">
                            <div className="row">   
                                <div className="col-md-12">     
                                    <div className="user-avatar" ><img src="http://i.pravatar.cc/30" className="img-circle" alt="Avatar" /></div>
                                    <div className="clearfix parent-element">
                                        <div className="user-detail element">
                                            <input placeholder="Write comment" type="text"/>
                                        </div>
                                    </div>
                                </div>      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderComment() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="post-detail-block-create">
                            <div className="row">   
                                <div className="col-md-2">     
                                    <div className="user-avatar" ><img src="http://i.pravatar.cc/50" className="img-circle" alt="Avatar" /></div>
                                    <div className="clearfix user-detail">
                                        <div className="user-detail-name">Username</div>
                                        <div className="user-detail-time">13</div>
                                    </div>
                                </div>      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    
    render() {
        return (
            <div className="container-fluid">
                { this.renderPost() }
                <div className="hr-custom-no-border" />
            </div>
        );
    }
}
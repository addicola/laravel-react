import React, { Component } from 'react';


export default class CreatePostPage extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="post-detail-block-create">
                                <div className="row">   
                                    <div className="col-md-12">     
                                        <input type="text" className="post-editor" placeholder="Title" autoComplete="off" id="title"/>
                                    </div>      
                                </div>
                                <hr/>
                                <div className="row">   
                                    <div className="col-md-12"> 
                                    </div>      
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
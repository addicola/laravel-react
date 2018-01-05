import React, { Component } from 'react';

export default class Post extends Component {

    handleShowDetail(id) {
        window.open("/posts/" + id, "_blank")
    }

    render() {
        return (
            <div className="container" onClick={this.handleShowDetail.bind(this, 1)}>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-md-6 text-left">{ this.props.post.title }</div>
                                    <div className="col-md-6 text-right">{ this.props.post.created_at }</div>
                                </div>
                            </div>

                            <div className="panel-body">
                                { this.props.post.body }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

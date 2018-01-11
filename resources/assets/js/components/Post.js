import React, { Component } from 'react';

export default class Post extends Component {

    handleShowDetail(id) {
        window.open("/posts/" + id, "_blank")
    }

    render() {
        return (
            <div className="panel panel-default" onClick={this.handleShowDetail.bind(this, this.props.post.id)}>
                

                <div className="panel-body">
                    <div><img src={'http://placehold.it/720x360&text=Example'} alt="img" className="img-responsive"/></div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="text-center">JAN</div>
                            <div className="text-center">13</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

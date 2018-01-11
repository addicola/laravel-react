import React, { Component } from 'react';
import EllipsisText  from 'react-ellipsis-text';

export default class Post extends Component {

    handleShowDetail(id) {
        window.open("/posts/" + id, "_blank")
    }

    render() {
        return (
            <div className="panel panel-default post-block">
                <div className="row">
                    <div className="col-md-12"><img src={'http://placehold.it/720x360&text=Example'} alt="img" className="img-responsive"/></div>
                    
                    <div className="col-md-12">
                        <div className="col-md-3 col-xs-3">
                            <div className="post-date">
                                <div className="post-date-day text-center">JAN</div>
                                <div className="text-center">13</div>
                            </div>
                           
                        </div>
                        <div className="col-md-9 col-xs-9" onClick={this.handleShowDetail.bind(this, this.props.post.id)}>
                            <div className="post-detail">
                                <div className="post-detail-title"><EllipsisText text={ this.props.post.title } length={55}/></div>
                                <div className="post-detail-body"><EllipsisText text={ this.props.post.body } length={128}/></div>
                            </div>   
                        </div>     
                    </div>
                    
                </div>
            </div>
        );
    }
}

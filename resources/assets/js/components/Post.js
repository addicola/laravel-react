import React, { Component } from 'react';
import EllipsisText  from 'react-ellipsis-text';

export default class Post extends Component {

    handleShowDetail(id) {
        window.open("/posts/" + id, "_blank")
    }

    getDateFromDateFormat(date) {
        var date = new Date(date);

        return date;
    }

    getMonthShortName(month) {
        
        var monthNames = [
            "JAN", "FEB", "MAR", "APR", "MAY", "JUNE","JULY", "AUG", "SEP", "OCT", "NOV", "DEC"
        ];

        return monthNames[month];
    }

    render() {
        return (
            <div className="panel panel-default post-block">
                <a href={"/posts/" + this.props.post.id}>
                    <div className="row">
                        <div className="col-md-12"><img src={'http://via.placeholder.com/720x360'} alt="img" className="img-responsive"/></div>
                        
                        <div className="col-md-12">
                            <div className="col-md-3 col-xs-3">
                                <div className="post-date">
                                    <div className="post-date-day text-center">{ this.getMonthShortName(this.getDateFromDateFormat(this.props.post.created_at).getMonth()) }</div>
                                    <div className="text-center">{ this.getDateFromDateFormat(this.props.post.created_at).getDate() }</div>
                                </div>
                            
                            </div>
                            {/* onClick={this.handleShowDetail.bind(this, this.props.post.id)} */}
                            <div className="col-md-9 col-xs-9" >
                                <div className="post-detail">
                                    <div className="post-detail-title"><EllipsisText text={ this.props.post.title } length={55}/></div>
                                    <div className="post-detail-body"><EllipsisText text={ this.props.post.body } length={128}/></div>
                                </div>   
                            </div>     
                        </div>
                        
                    </div>
                </a>
            </div>
        );
    }
}

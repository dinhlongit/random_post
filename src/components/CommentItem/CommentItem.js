import React, { Component } from 'react';
 
class CommentItem extends Component {
    render() { 

        return (
            <div>
                <div class="comment"><div class="content"><a class="author">{this.props.comment.name}</a><div class="metadata"><span>{this.props.comment.email}</span></div><div class="text">{this.props.comment.body}</div></div></div>
            </div>
        );
    }
}
 
export default CommentItem;
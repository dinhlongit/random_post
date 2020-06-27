import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react'
import  CommentItem  from '../../components/CommentItem/CommentItem'
class ListComments extends Component {
    render() { 
        return (
            <div>
               <div class="ui mini comments">
                   <h3 class="ui dividing header">Comments</h3>
                 {
                     this.props.comments.map((item,key) => {
                         return <CommentItem key={key} comment={item}></CommentItem>
                     })
                 }
            </div>
            </div>
        );
    }
}
 
export default ListComments;
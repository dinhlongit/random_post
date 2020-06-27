import React, { Component } from 'react';
class Post extends Component {
    render() { 
        console.log(this.props.color)
        return (
            <div>
<div class= {`ui ${this.props.color} message`} >
        <div class="header">{this.props.title}</div>
        <p>{this.props.body}</p>
</div>
            </div>
        );
    }
}
 
export default Post;
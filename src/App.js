import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './containers/Post/Post'
import  ListComments  from './containers/ListComments/ListComents'
import { Container } from 'semantic-ui-react'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        post: [],
        listComment: [],
        messageColor : "",
        isLoading: false,
    };
}

fetchData = () => {
  this.setState({ isLoading: true });
  const colors = ["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","black"]
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const rands = Math.floor(Math.random() * 100) + 1;
  Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts/'+rands),
    fetch('https://jsonplaceholder.typicode.com/comments?postId='+rands)
])
.then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
.then(([data1, data2]) => this.setState({
  post: data1, 
  listComment: data2,
  messageColor : randomColor,
  isLoading: false
}));
 }


componentDidMount() {
    this.fetchData();
  }


render() { 

   if (this.state.isLoading == true){
    return <div class="ui active centered inline loader"></div>;
   } 

  return (
    <div className="App">
    <Container>
    <button onClick={this.fetchData} class="ui blue basic button"><i aria-hidden="true" class="undo icon"></i>Loadpost</button>
      <Post color = {this.state.messageColor} title = {this.state.post.title} body={this.state.post.body}/>
      <ListComments comments={this.state.listComment}/>
    </Container> 
    </div>
  );
  }
}

export default App;

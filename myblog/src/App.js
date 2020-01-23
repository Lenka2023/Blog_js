import React, {Component} from 'react';
import {HeaderBlock, PostItem } from 'components';
class App extends Component{
  render(){
    return(
     <div className="App">
        <HeaderBlock
          title="Заголовок сайта"
          description="Описание"
          imageUrl="https://images.unsplash.com/photo-1554956742-32f116cf57af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
       />
        <div className="container">
              <div className="content">
                 <button type="button" className="btn btn-primary">
              Add post
                  </button>
                  <div className="content">
                      <div className="post-items"> 
                          <div className="post-item"> 
          </div>
              <a href="#">
                  <h2>Post title</h2>
              </a>
              <p>
                  <i>Posted on november 2, 2018</i>
                  <a href="#">Remove</a> 
                   <a href="#">Edit</a> 
                </p> 
                               </div>    
                            </div>
                        </div>    
                    </div>
                  </div>
               
    );
  }
}


export default App;

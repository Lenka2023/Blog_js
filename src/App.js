import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {HeaderBlock, PostItem, AddForm } from 'components';
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
                {/* <button type="button" className="btn btn-primary">
              Add post
                  </button>*/}
                  <div className="content">
                    <div className="post-items"> 
                          <PostItem _id="1" title="Заголовок статьи" createdAt="Fri Nov 02 2018"/> 
                                                                              </div>     
                               <Router>
                               <div>
                                <Switch>
                                {/* <Route path="/" exact component={() => <PostsList />} />*/}
                                 {/*<Route path="/post/:id" exact component={FullPost} /> */}
                                {/* <Route path="*" component={NotFound} />*/}
                                </Switch>
                                  </div>
                                  </Router>
                            </div>
                        </div>    
                    </div>
                  </div>
               
    );
  }
}


export default App;

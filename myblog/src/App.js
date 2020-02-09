import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {HeaderBlock,  FullPost, AddForm, NotFound } from 'components';
import { PostsList,  FullPost } from 'modules';

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
                       
                               <Router>
                               <div>
                                
                                <Switch>
                                 <Route path="/" exact component={()=><PostsList />}/>
                                 <Route path="/post/:id" exact component={FullPost}  /> 
                                 <Route path="/post/:id/edit" exact component={AddForm} />

                                <Route path="*"  component={NotFound} />
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

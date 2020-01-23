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
                     
                               <form className="add-form">
  <div className="form-group">
   <div className="add-form__row">
          <h4>
            <label for="title">Title</label>
          </h4>
          <input type="text" className="form-control" id="title" placeholder="Enter email" />
        </div>
        <div className="add-form__row">
          <h4>
            <label for="image">Image URL</label>
          </h4>
          <input type="text" className="form-control" id="image" placeholder="Enter image URL" />
        </div>
        <div className="add-form__row">
          <h4>
            <label for="description">Description</label>
          </h4>
          <textarea rows="8" className="form-control" placeholder="Enter text" id="description" placeholder="Enter description"/>
        </div>
      </div>
   <button type="submit" className="btn btn-primary">Submit</button>
</form>    
                            </div>
                        </div>    
                    </div>
                  </div>
               
    );
  }
}


export default App;

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import store, { loadFlowers } from './store';




const App = connect(
  (state)=> {
     return state; 
  },
  (dispatch)=> {
    return {  
     bootstrap: async ()=>  {
       const flowers = (await axios.get('/api/flowers')).data 
       dispatch(loadFlowers(flowers));
     }
   }
 }
)(class App extends Component {
    componentDidMount(){
   this.props.bootstrap();
 }
 render(){
   const { flowers } = this.props;  
 return (
  <div> 
    
   
  </div>
  );
 }
})



render(
<Provider store={store}>    
<App />
</Provider >,
document.querySelector('#root')
);

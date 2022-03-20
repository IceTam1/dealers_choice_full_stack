import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import store, { loadFlowers } from './store';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import Flowers from './Flowers';
import Nav from './Nav';
import Flower from './Flower'



const Home = () => <hr />

const App = connect(
  (state)=> {
     return state; 
  },
  (dispatch)=> {
    return {  
     bootstrap: async ()=>  {
       dispatch(loadFlowers());
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
  <Router>
  <div> 
    <h1> Flower Store </h1>
    <Route component={ Nav } />
    <Route component={ Home } exact path='/' />
    <Route component={ Flowers } exact path='/flowers' />
    <Route component={ Flower } path='/flowers/:id' />
  </div>
  </Router> 
  );
 }
})



render(
<Provider store={store}>    
<App />
</Provider >,
document.querySelector('#root')
);

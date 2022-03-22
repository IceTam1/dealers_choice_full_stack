import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import store, { loadFlowers } from './store';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import Flowers from './Flowers';
import Nav from './Nav';
import Flower from './Flower'



const Home = () => {
  return (
    <div className='home'>
       <div> Flowers </div>
       <div> Make </div>
       <div> People </div>
       <div> Happy. </div>
    </div>
  )
}

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

    <h1>The Flower Collection
    <Route component={ Nav } />
    </h1>
    
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

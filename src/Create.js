import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createFlower } from './store';


class Create extends Component {
    constructor(){
      super();
      this.state = {
        name: ''  
      }
      this.save = this.save.bind(this);  
    }
  save(ev){
  ev.preventDefault();
  const flower = {
     name: this.state.name
  };
  this.props.createFlower(flower)
 }
 render(){
  const {createFlower, flowers} = this.props;
  const { name } = this.state;
  const { save } = this;
  console.log(name);
  return (
      <form onSubmit={ save }>
      <input onChange={ ev => this.setState({ name: ev.target.value })} name='name' placeholder='Flower Name' value={ name } />
      <button disabled={!name}>Add To My Collection</button>
      </form> 
    );
  }
}
 
const mapDispatchToProps = (dispatch, { history })=> {
    return {
       createFlower: async(flower)=> {
           await dispatch(createFlower(flower, history));
       } 
    }
}

export default connect(null, mapDispatchToProps)(Create);
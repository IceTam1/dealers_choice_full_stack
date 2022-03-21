import React from 'react';
import { connect } from 'react-redux';
import { deleteFlower } from './store';


const Flower = ({ flower, deleteFlower }) => {
  if(!flower.id){
     return null; 
  }
   return ( 
    <div>
    flower description for {flower.name}
    <button onClick={()=> deleteFlower(flower)}>Delete Flower</button>
    </div>
   )
};

export default connect(
    (state, otherProps) => {
      const flower = state.flowers.find(flower => flower.id === otherProps.match.params.id*1) || {};
       return {
          flower
       };
    },
    (dispatch, {history})=> {
      return {
        deleteFlower: (flower) => dispatch(deleteFlower(flower, history)) 
      }
    }  
)(Flower);
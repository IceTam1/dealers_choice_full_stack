import React from 'react';
import { connect } from 'react-redux';


const Flower = ({ flower }) => {
  if(!flower.id){
     return null; 
  }
   return ( 
    <div>
    flower description for {flower.name}
    </div>
   )
};

export default connect(
    (state, otherProps) => {
      const flower = state.flowers.find(flower => flower.id === otherProps.match.params.id*1) || {};
       return {
          flower
       };
    }  
)(Flower);
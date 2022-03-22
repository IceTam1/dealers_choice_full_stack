import React from 'react';
import { connect } from 'react-redux';
import { deleteFlower } from './store';


const Flower = ({ flower, deleteFlower }) => {
  if(!flower.id){
     return null; 
  }
   return ( 
    <div className='flowerdetail'>
    <div className='description'> How To Care For {flower.name}
      <ol className='steps'>
        <li>Clean Vase thoroughly!</li>
        <li>Fill the vase two-thirds with fresh, lukewarm water and add your flower food.</li>
        <li>Remove any foliage that will sit below the waterline to avoid build-up of debris</li>
        <li>Trim about 2-3cm from the bottom of the stems at a 45-degree angle</li>
        <li>Change the water regularly after the second day.</li>
     </ol>
     </div>
    <button className='delete' onClick={()=> deleteFlower(flower)}>Remove from My Collection</button>
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
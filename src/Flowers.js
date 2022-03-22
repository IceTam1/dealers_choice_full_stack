
import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import faker from 'faker';
import { createFlower } from './store';
import Create from './Create'


const Flowers = ({ createFlower, flowers}) => {
   return ( 
    <div>
    <Route component={ Create } />   
    {/* <button onClick={()=> createFlower(faker.name.firstName())}>Create</button> */}
    <ul className='flowerlist'>
    {
       flowers.map (flower => {
           return (
             
              <li className='flower' key= {flower.id}> 
               <Link to={`/flowers/${ flower.id }`}>
                {flower.name} 
               </Link>
              </li> 
         
           )
       }) 
    }  
  </ul>
  </div>
   )
}

export default connect(
   state => state,
   )(Flowers);
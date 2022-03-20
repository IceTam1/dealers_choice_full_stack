import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


const Flowers = ({flowers}) => {
   return ( 
    <ul>
    {
       flowers.map (flower => {
           return (
              <li key= {flower.id}> 
               <Link to={`/flowers/${ flower.id }`}>
                {flower.name} -
               <span>  ${flower.price} </span>
               </Link>
              </li> 
           )
       }) 
    }  
  </ul>
   )
}

export default connect(state => state)(Flowers)
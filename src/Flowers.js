import

const Flowers = ({flowers}) => {
   return ( 
    <ul>
    {
       flowers.map (flower => {
           return (
              <li key= {flower.id}> 
                {flower.name} -
               <span>  ${flower.price} </span>
              </li> 
           )
       }) 
    }  
  </ul>
   )
}

export default connect(state => state)(Flowers))

import { createStore, combineReducers } from 'redux';

const LOAD_FLOWERS ='LOAD_FLOWERS';



const store = createStore((state = {flowers: []}, action)=> {
    if(action.type === 'LOAD_FLOWERS'){
       state = {...state, flowers: action.flowers } 
    }
    return state
})

const loadFlowers = (flowers) => {
    return {
       type: LOAD_FLOWERS,
       flowers  
    }
}


export default store;
export { loadFlowers }
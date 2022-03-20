import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const LOAD_FLOWERS ='LOAD_FLOWERS';

const flowersReducer = (state = [], action)=>{
    if (action.type === LOAD_FLOWERS) {
       state = action.flowers; 
    }
   return state; 
}

const reducer = combineReducers({
    flowers: flowersReducer
});

const _loadFlowers = flowers => ({ type: LOAD_FLOWERS, flowers})

const loadFlowers = () => {
    return async(dispatch)=> {
        const flowers = (await axios.get('/api/flowers')).data;
        dispatch(_loadFlowers(flowers))
    }
}



const store = createStore(reducer, applyMiddleware(thunk));

export default store;
export { loadFlowers }; 
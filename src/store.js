import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const LOAD_FLOWERS = 'LOAD_FLOWERS';
const CREATE_FLOWER = 'CREATE_FLOWER';
const DELETE_FLOWER = 'DELETE_FLOWER';

const flowersReducer = (state = [], action)=>{
    if (action.type === LOAD_FLOWERS) {
       state = action.flowers; 
    }
    if (action.type === CREATE_FLOWER) {
        state = [...state, action.flower]; 
    }
    if (action.type === DELETE_FLOWER) {
        state = state.filter(flower => flower.id !== action.flower.id); 
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

const _createFlower = flower => ({ type: CREATE_FLOWER, flower})

const createFlower = (flowerName, history) => {
    return async(dispatch)=> {
        const {data: flower} = (await axios.post('/api/flowers', flowerName));
        dispatch(_createFlower(flower));
        history.push(`/flowers/${flower.id}`)
    }
}

const _deleteFlower = flower => ({ type: DELETE_FLOWER, flower})

const deleteFlower = (flower, history) => {
    return async(dispatch)=> {
        await axios.delete(`/api/flowers/${flower.id}`);
        dispatch(_deleteFlower(flower));
        history.push('/flowers')
    }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
export { loadFlowers, createFlower, deleteFlower }; 
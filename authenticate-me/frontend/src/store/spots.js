import { csrfFetch } from "./csrf";

//actions -->
const LOAD_SPOTS = 'spots/loadSpots';

//action creators -->
const loadSpots = (spots) => {
    return {
        type: LOAD_SPOTS,
        spots
    }
}

//thunk action creators -->
export const getSpots = () => async (dispatch) => {
    const res = await csrfFetch('/api/spots');
    const data = await res.json();
    dispatch(loadSpots(data));
    return data;
}

//set intial state on load
const initialState = {};
//reducer -->
const spotsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_SPOTS:
            newState = {...state, ...action.spots};
            return newState;
        default:
            return state;
    }
}

export default spotsReducer;

import { csrfFetch } from "./csrf";

//actions -->
const LOAD_SPOTS = 'spots/loadSpots';
const LOAD_SPOT_DETAILS = 'spots/loadSpotDetails';

//action creators -->
const loadSpots = (spots) => {
    return {
        type: LOAD_SPOTS,
        spots
    }
}

const loadSpotDetails = (spot) => {
    return {
        type: LOAD_SPOT_DETAILS,
        spot
    }
}

//thunk action creators -->
export const getSpots = () => async (dispatch) => {
    const res = await csrfFetch('/api/spots');
    const data = await res.json();
    dispatch(loadSpots(data));
    return data;
}

export const getOneSpot = (spotId) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${spotId}`);
    const data = await res.json();
    dispatch(loadSpotDetails(data));
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
        case LOAD_SPOT_DETAILS:
            newState = {...state, [action.spot.id]: action.spot};
            return newState;
        default:
            return state;
    }
}

export default spotsReducer;

import { csrfFetch } from "./csrf";

//actions -->
const LOAD_SPOTS = 'spots/loadSpots';
const LOAD_SPOT_DETAILS = 'spots/loadSpotDetails';
const CREATE_SPOT = 'spots/createSpot';

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

const createSpot = (spot) => {
    return {
        type: CREATE_SPOT,
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

export const postSpot = (spot) => async (dispatch) => {
    const res = await csrfFetch('/api/spots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spot)
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(createSpot(data));
        return data;
    }
}

//set intial state on load
const initialState = { allSpots: {}, singleSpot: {} };
//reducer -->
const spotsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_SPOTS:
            newState = {...state, allSpots: {}, singleSpot: {}};
            action.spots.Spots.forEach(spot => newState.allSpots[spot.id] = spot);
            return newState;
        case LOAD_SPOT_DETAILS:
            newState = {...state, allSpots: {}, singleSpot: {}};
            newState.singleSpot[action.spot.id] = action.spot;
            return newState;
        case CREATE_SPOT:
            newState = {...state, allSpots: {...state.allSpots}, singleSpot: {}};
            newState.allSpots[action.spot.id] = action.spot;
            return newState;
        default:
            return state;
    }
}

export default spotsReducer;

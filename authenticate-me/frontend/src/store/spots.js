import { csrfFetch } from "./csrf";

//actions -->
const LOAD_SPOTS = 'spots/loadSpots';
const LOAD_SPOT_DETAILS = 'spots/loadSpotDetails';
const CREATE_SPOT = 'spots/createSpot';
const LOAD_USER_SPOTS = 'spots/loadUserSpots';
const REMOVE_SPOT = 'spots/removeSpot'

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

const loadUserSpots = (spots) => {
    return {
        type: LOAD_USER_SPOTS,
        spots
    }
}

const removeSpot = (spotId) => {
    return {
        type: REMOVE_SPOT,
        spotId
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

export const putSpot = (spot) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${spot.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spot)
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(createSpot(data));
        return data;
    }
}

export const deleteSpot = (spotId) => async (dispatch) => {
    const res = await fetch(`/api/spots/${spotId}`, {
        method: 'DELETE'
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(removeSpot(spotId))
        return data
    };
}

export const getUserSpots = () => async (dispatch) => {
    const res = await csrfFetch('/api/spots/current');
    if (res.ok) {
        const data = await res.json();
        dispatch(loadUserSpots(data));
        return data;
    }
}

//set intial state on load
const initialState = { allSpots: {}, singleSpot: {}, currentUserSpots: {} };
//reducer -->
const spotsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_SPOTS:
            newState = {...state, allSpots: {}, singleSpot: {}, currentUserSpots: {}};
            action.spots.Spots.forEach(spot => newState.allSpots[spot.id] = spot);
            return newState;
        case LOAD_SPOT_DETAILS:
            newState = {...state, allSpots: {}, singleSpot: { SpotImages: [], Owner: {} }, currentUserSpots: {}};
            newState.singleSpot[action.spot.id] = action.spot;
            newState.singleSpot.SpotImages = [ ...action.spot.SpotImages ];
            newState.singleSpot.Owner = { ...action.spot.Owner };
            return newState;
        case CREATE_SPOT:
            newState = {...state, allSpots: {...state.allSpots}, singleSpot: {}, currentUserSpots: {}};
            newState.allSpots[action.spot.id] = action.spot;
            return newState;
        case LOAD_USER_SPOTS:
            newState = {...state, allSpots: {}, singleSpot: {}, currentUserSpots: {}};
            action.spots.Spots.forEach(spot => newState.currentUserSpots[spot.id] = spot);
            return newState;
        case REMOVE_SPOT:
            newState = {...state, allSpots: {...state.allSpots}, singleSpot: {}, currentUserSpots: {...state.currentUserSpots}};
            delete newState.allSpots[action.spotId];
            delete newState.currentUserSpots[action.spotId];
            return newState;
        default:
            return state;
    }
}

export default spotsReducer;

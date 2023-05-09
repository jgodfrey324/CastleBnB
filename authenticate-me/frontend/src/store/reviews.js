import { csrfFetch } from "./csrf";

//actions ->
const LOAD_REVIEWS = '/reviews/loadReviews';

//action creators ->
const loadReviews = (reviews) => {
    return {
        type: LOAD_REVIEWS,
        reviews
    }
}

//thunk action creators ->
export const getReviews = (spotId) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${spotId}/reviews`);
    const data = await res.json();
    dispatch(loadReviews(data));
    return data;
}

//reducer ->
const initialState = {};

const reviewsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_REVIEWS:
            newState = {...state, ...action.reviews};
            return newState;
        default:
            return state;
    }
}

export default reviewsReducer;

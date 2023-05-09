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
const initialState = { spot: {}, user: {}};

const reviewsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_REVIEWS:
            newState = {...state, ...state.spot, ...state.user};
            action.reviews.Reviews.forEach(review => newState.spot[review.id] = review)
            return newState;
        default:
            return state;
    }
}

export default reviewsReducer;

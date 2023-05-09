import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../store/reviews';

const Reviews = ({ spotId }) => {
    const dispatch = useDispatch();
    const reviewsFromState = useSelector(state => state.reviews.spot);
    const reviews = Object.values(reviewsFromState);
    const user = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spots.singleSpot[spotId]);

    useEffect (() => {
        dispatch(getReviews(spotId));
    }, [dispatch, spotId]);

    const makeDate = (review) =>{
        const date = new Date(review.createdAt);
        const options = { year: 'numeric', month: 'long' };
        const returnDate = date.toLocaleDateString(undefined, options);

        return returnDate;
    }

    if (user && (spot.ownerId !== user.id) && spot.avgStarRating === 'No reviews yet') return (
        <p>Be the first to post a review!</p>
    )

    if (!reviews) return null;

    return (
        <>
            {reviews.map(review => {
                return (
                    <div key={review.id} className='single-review'>
                        <p className='review-name'>{review.User.firstName}</p>
                        <p className='review-date'>{makeDate(review)}</p>
                        <p className='review-text'>{review.review}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Reviews;

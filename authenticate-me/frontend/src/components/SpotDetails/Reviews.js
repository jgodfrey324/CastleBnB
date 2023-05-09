import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../store/reviews';

const Reviews = ({ spotId }) => {
    const dispatch = useDispatch();
    const reviews = useSelector(state => state.reviews);
    const user = useSelector(state => state.session);
    const spot = useSelector(state => state.spots[spotId]);

    useEffect (() => {
        dispatch(getReviews(spotId));
    }, [dispatch, spotId]);

    const makeDate = (review) =>{
        const date = new Date(review.createdAt);
        const options = { year: 'numeric', month: 'long' };
        const returnDate = date.toLocaleDateString(undefined, options);

        return returnDate;
    }

    if (!reviews.Reviews) return null;

    if (user.user && (spot.ownerId !== user.user.id) && spot.avgStarRating === 'No reviews yet') return (
        <p>Be the first to post a review!</p>
    )

    return (
        <>
            {reviews.Reviews.map(review => {
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

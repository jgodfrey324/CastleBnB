import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../store/reviews';

const Reviews = ({ spotId }) => {
    const dispatch = useDispatch();
    const reviews = Object.values(useSelector(state => state.reviews.spot));
    const user = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spots.singleSpot[spotId]);

    //getting reviews of current spot
    useEffect (() => {
        dispatch(getReviews(spotId));
    }, [dispatch, spotId]);

    //sorting reviews so most recent appears first
    const compareDates = (a, b) => {
        if (a.createdAt > b.createdAt) return -1;
        if (a.createdAt < b.createdAt) return 1;
        return 0;
    }
    reviews.sort(compareDates);

    //returning a date in proper format for display (month - year)
    const makeDate = (review) =>{
        const date = new Date(review.createdAt);
        const options = { year: 'numeric', month: 'long' };
        const returnDate = date.toLocaleDateString(undefined, options);

        return returnDate;
    }

    //if spot is new and not owned by logged in user, then alternate text will show
    if (user && (spot.ownerId !== user.id) && spot.avgStarRating === 'No reviews yet') return (
        <p>Be the first to post a review!</p>
    )

    //safety check to wait for data
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

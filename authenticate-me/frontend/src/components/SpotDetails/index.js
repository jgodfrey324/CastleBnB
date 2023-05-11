import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getOneSpot } from '../../store/spots';
import { getUserReviews } from '../../store/reviews';
import SpotImages from './SpotImages';
import Reviews from './Reviews';
import './SpotDetails.css';
import PostReviewModal from './PostReviewModal';
import OpenModalButton from '../OpenModalButton';

const SpotDetails = () => {
    const { spotId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    //keeps track of when review is deleted
    const [deleted, setDeleted] = useState(false);
    //keeps track of when review is posted
    const [posted, setPosted] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spots.singleSpot[spotId]);
    const userReviews = Object.values(useSelector(state => state.reviews.user));
    const alreadyHaveReview = userReviews.find( review => review.Spot.id === parseInt(spotId));

    useEffect(() => {
        dispatch(getUserReviews());
        setPosted(false);
    }, [dispatch, posted])

    useEffect(() => {
        dispatch(getOneSpot(spotId));
        setDeleted(false);
        setPosted(false);
    }, [dispatch, spotId, deleted, posted]);

    const starRating = (spot) => {
        if (spot.avgStarRating === 'No reviews yet') return 'New';
        if (spot.avgStarRating.toString().split('.').length === 1) {
            let newRating = spot.avgStarRating.toString();
            newRating = newRating + '.0';
            return newRating;
        };
        return spot.avgStarRating;
    }

    const numRatings = (spot) => {
        if (spot.numReviews === 'No reviews yet') return '';
        if (spot.numReviews === 1) return '1 review';
        return `${spot.numReviews} reviews`;
    }

    if (!spot) return null;

    return (
        <div className='spot-details-house'>
            <div className='spot-details'>
                <div className='spot-name-place'>
                    <h1>{spot.name}</h1>
                    <p>{spot.city}, {spot.state}, {spot.country}</p>
                </div>
                <SpotImages spotId={spot.id} />
                <div className='spot-description'>
                    <div className='description-text'>
                        <h2>Hosted by {spot.Owner.firstName} {spot.Owner.lastName}</h2>
                        <div className='description-p-room'>
                            <p>{spot.description}</p>
                        </div>
                    </div>
                    {sessionUser && (
                        <div className='description-reserve-box'>
                            <div className='description-box-star-rating'>
                                <h3>${spot.price}</h3>
                                <span id='night'>night</span>
                                <i className="fa-solid fa-star" style={{color: '#b39003'}}></i>
                                <span id='star'>{starRating(spot)}</span>
                                <span id='review'>{numRatings(spot)}</span>
                            </div>
                            <button className='reserve-button'
                                onClick={() => alert('Feature coming soon')}>Reserve</button>
                        </div>
                    )}
                </div>
            </div>
            <div className='spot-reviews'>
                <div className='spot-rating-header'>
                    <i className="fa-solid fa-star" style={{color: '#b39003'}}></i>
                    <span id='star-two'>{starRating(spot)}</span>
                    <span id='reviews-two'>{numRatings(spot)}</span>
                </div>
                {sessionUser && (sessionUser.id !== spot.Owner.id) && !alreadyHaveReview && (
                    <OpenModalButton
                        buttonText="Post Your Review"
                        modalComponent={<PostReviewModal spotId={spotId} setPosted={setPosted} />}
                    />
                )}
                <Reviews spotId={spot.id} setDeleted={setDeleted} />
            </div>
        </div>
    )
}

export default SpotDetails;

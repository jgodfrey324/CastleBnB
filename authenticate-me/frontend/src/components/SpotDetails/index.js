import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getOneSpot } from '../../store/spots';
import SpotImages from './SpotImages';
import './SpotDetails.css';

const SpotDetails = () => {
    const { spotId } = useParams();
    const dispatch = useDispatch();

    const spot = useSelector(state => state.spots[spotId]);

    console.log(spot);
    useEffect(() => {
        dispatch(getOneSpot(spotId));
    }, [dispatch, spotId]);

    const starRating = (spot) => {
        if (spot.avgStarRating === 'No reviews yet') return 'New';
        return spot.avgStarRating;
    };

    const numRatings = (spot) => {
        if (spot.numReviews === 'No reviews yet') return 0;
        return spot.numReviews;
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
                        <p>{spot.description}</p>
                    </div>
                    <div className='description-reserve-box'>
                        <div className='description-box-star-rating'>
                            <h3>${spot.price}</h3>
                            <span id='night'>night</span>
                            <i className="fa-solid fa-star" style={{color: '#b39003'}}></i>
                            <span id='star'>{starRating(spot)}</span>
                            <span id='review'>{numRatings(spot)} review/s</span>
                        </div>
                        <button className='reserve-button'>Reserve</button>
                    </div>
                </div>
            </div>
            <div className='spot-reviews'>
                <div className='spot-rating-header'>
                    <i className="fa-solid fa-star" style={{color: '#b39003'}}></i>
                    <span id='star-two'>{starRating(spot)}</span>
                    <span id='reviews-two'>{numRatings(spot)} review/s</span>
                </div>
                <p> ---- reviews comp will go here ---- </p>
            </div>
        </div>
    )
}

export default SpotDetails;

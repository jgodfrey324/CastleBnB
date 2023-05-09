import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSpots } from '../../store/spots';
import './SpotsLanding.css';

const SpotsLanding = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const spots = useSelector(state => state.spots);

    useEffect (() => {
        dispatch(getSpots());
    }, [dispatch])

    const starRating = (spot) => {
        if (spot.avgRating === 'No reviews yet') return 'New';
        return spot.avgRating;
    }

    if (!spots.Spots) return null;

    return (
        <div className='spots-house'>
            {spots.Spots.map(spot => {
                return (
                    <div key={spot.id} className='spot-room'
                        onClick={() => {
                            console.log('spot ->', spot)
                            history.push(`/spots/${spot.id}`);
                            }}>
                        <img src={spot.previewImage} alt={`Preview of ${spot.name}`}></img>
                        <div className='spot-city-rating'>
                            <span className='spot-city'>{spot.city}, {spot.state}</span>
                            <div className='spot-star-rating'>
                                <i className="fa-solid fa-star" style={{color: '#b39003'}}></i>
                                <span>{starRating(spot)}</span>
                            </div>
                        </div>
                        <span className='spot-price'>${spot.price}</span>
                        <span>  night</span>
                    </div>
                )
            })}
        </div>
    )
}

export default SpotsLanding;

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserSpots } from '../../store/spots';
import { useEffect } from "react";
import './ManageSpots.css';
import DeleteSpotModal from "./DeleteSpotModal";
import OpenModalButton from '../OpenModalButton';

const ManageSpots = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const userSpots = useSelector(state => state.spots.currentUserSpots);
    const spots = Object.values(userSpots);

    //if a user logs out on this form they should be redirected to home
    if (!sessionUser) history.push('/');

    useEffect(() => {
        dispatch(getUserSpots());
    }, [dispatch]);

    const starRating = (spot) => {
        if (spot.avgRating === 'No reviews yet') return 'New';
        if (spot.avgRating.toString().split('.').length === 1) {
            let newRating = spot.avgRating.toString();
            newRating = newRating + '.0';
            return newRating;
        };
        return spot.avgRating;
    }

    if (!spots) return null;

    return (
        <div className="manage-spots-house">
            <h1>Manage Spots</h1>
            <button className="manage-spots-button" onClick={() => history.push('/spots/new')}>Create a New Spot</button>
            <div className="spots-house">
                {spots.map(spot => {
                    return (
                        <div key={spot.id} className="manage-spots-house">
                            <div className='spot-room'
                                onClick={() => {
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
                            <div className="manage-buttons">
                                <button id='edit' onClick={() => history.push(`/spots/${spot.id}/edit`)}>Edit</button>
                                <OpenModalButton
                                    id='delete'
                                    buttonText="Delete"
                                    modalComponent={<DeleteSpotModal spotId={spot.id} />}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ManageSpots;

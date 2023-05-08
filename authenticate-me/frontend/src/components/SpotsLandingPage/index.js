import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSpots } from '../../store/spots';
import './SpotsLanding.css';

const SpotsLanding = () => {
    const dispatch = useDispatch();
    const spots = useSelector(state => state.spots);

    useEffect (() => {
        dispatch(getSpots());
    }, [dispatch])
    // console.log('spots.Spots ', spots.Spots[0])

    if (!spots.Spots) {
        console.log('i went am null');
        return null
    };
    return (
        <div className='spots-house'>
            {spots.Spots.map(spot => {
                return (
                    <div key={spot.id} className='spot-room'>
                        <img src={spot.previewImage}></img>
                        <p>{spot.city}, {spot.state}</p>
                        <p>${spot.price} /night</p>
                    </div>
                )
            })}
        </div>
    )
}

export default SpotsLanding;

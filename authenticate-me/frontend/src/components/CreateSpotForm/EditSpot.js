import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import SpotForm from './SpotForm';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSpots } from '../../store/spots';

const EditSpot = () => {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const spotFromState = useSelector(state => state.spots.currentUserSpots[spotId]);

    useEffect(() => {
        dispatch(getUserSpots());
    }, [dispatch])

    if (!spotFromState) return null;
    const { country, address, city, state, lat, lng, description, name, price, previewImage } = spotFromState;

    const spot = {
        country,
        address,
        city,
        state,
        lat,
        lng,
        description,
        name,
        price,
        previewImage
    }

    // if (!spotFromState) return null;

    return (
        <SpotForm spot={spot} formType={'put'} />
    )
};

export default EditSpot;

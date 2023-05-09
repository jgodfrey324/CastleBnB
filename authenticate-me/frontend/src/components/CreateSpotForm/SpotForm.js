//you are creating this form page next!!
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postSpot } from '../../store/spots';
import './SpotForm.css';



const SpotForm = ({ spot, formType }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [country, setCountry] = useState(spot?.country);
  const [address, setAddress] = useState(spot?.address);
  const [city, setCity] = useState(spot?.city);
  const [state, setState] = useState(spot?.state);
  const [latitude, setLatitude] = useState(spot?.latitude);
  const [longitude, setLongitude] = useState(spot?.longitude);
  const [description, setDescription] = useState(spot?.description);
  const [name, setName] = useState(spot?.name);
  const [price, setPrice] = useState(spot?.price);
  const [previewImg, setPreviewImg] = useState(spot?.previewImg);

  const [errors, setErrors] = useState({});

  const reset = () => {
    setCountry(spot?.country);
    setAddress(spot?.address);
    setCity(spot?.address);
    setState(spot?.state);
    setLatitude(spot?.latitude);
    setLongitude(spot?.longitude);
    setDescription(spot?.description);
    setName(spot?.name);
    setPrice(spot?.price);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    if (!latitude && !longitude) {
        spot = {
            ...spot,
            country,
            address,
            city,
            state,
            description,
            name,
            price
        }
    } else {
        spot = {
            ...spot,
            country,
            address,
            city,
            state,
            lat: latitude,
            lng: longitude,
            description,
            name,
            price
        }
    }

    console.log('this is new spot obj to send ------------> ', spot);
    let newSpot;
    let data;
    if (formType === 'post') {
        newSpot = dispatch(postSpot(spot))
          .catch(async (res) => {
            data = await res.json();
            if (data && data.errors) {
              setErrors(data.errors);
            }
        });
    } else if (formType === 'put') {
        console.log('put spot is coming soon');
    }

    console.log('data', data);
    console.log('new spot after dispatch: ', newSpot);
    console.log('errors obj: ', errors);

    reset();
    // return history.push(`/spots/${newSpot.spot.id}`);
  };

  return (
    <form id='create-spot-form' onSubmit={handleSubmit}>
        <h1>Type of form here</h1>
        <div className='form-input-fields'>
            <div className="form-where">
                <h2>Where's your place located?</h2>
                <p>Guests will only get your exact address once they booked a reservation.</p>
                <label>
                    Country
                    <input
                    type="text"
                    value={country}
                    placeholder='Country'
                    required
                    onChange={(e) => setCountry(e.target.value)}
                    />
                </label>
                {errors.country && <p className="display-errors">{errors.country}</p>}
                <label>
                    Street Address
                    <input
                    type='text'
                    value={address}
                    placeholder='Address'
                    required
                    onChange={(e) => setAddress(e.target.value)}
                    />
                </label>
                {errors.address && <p className="display-errors">{errors.address}</p>}
                <div className='form-city-state'>
                    <label>
                        City
                        <input
                        type='text'
                        value={city}
                        placeholder='City'
                        required
                        onChange={(e) => setCity(e.target.value)}
                        />
                    </label>
                    {errors.city && <p className="display-errors">{errors.city}</p>}
                    <label>
                        State
                        <input
                        type='text'
                        value={state}
                        placeholder='State'
                        required
                        onChange={(e) => setState(e.target.value)}
                        />
                    </label>
                    {errors.state && <p className="display-errors">{errors.state}</p>}
                </div>
                <div className='form-lat-lng'>
                    <label>
                        Latitude
                        <input
                        type='number'
                        value={latitude}
                        placeholder='Latitude'
                        onChange={(e) => setLatitude(e.target.value)}
                        />
                    </label>
                    {errors.lat && <p className="display-errors">{errors.latitude}</p>}
                    <label>
                        Longitude
                        <input
                        type='number'
                        value={longitude}
                        placeholder='Longitude'
                        onChange={(e) => setLongitude(e.target.value)}
                        />
                    </label>
                    {errors.lng && <p className="display-errors">{errors.longitude}</p>}
                </div>
            </div>
            <div className='form-desciption'>
                <h2>Describe your place to guests</h2>
                <p>Mention the best feature of your space, any special amenities like fast wifi or parking, and what you love about the neighborhood.</p>
                <label>
                    <textarea
                    value={description}
                    placeholder='Please write at least 30 characters'
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    minLength={30}
                    />
                </label>
                {errors.description && <p className="display-errors">{errors.description}</p>}
            </div>
            <div className='form-title'>
                <h2>Create a title for your spot</h2>
                <p>Catch guests' attention with a spot title that highlights what makes your place special.</p>
                <label>
                    <input
                    type='text'
                    value={name}
                    placeholder='Name of your spot'
                    required
                    maxLength={50}
                    onChange={(e) => setName(e.target.value)}
                    />
                </label>
                {errors.name && <p className="display-errors">{errors.name}</p>}
            </div>
            <div className='form-price'>
                <h2>Set a base price for your spot</h2>
                <p>Competitive pricing can help your listing stand out and rank higher in search results.</p>
                <label>
                    $ <input
                    type='number'
                    value={price}
                    placeholder='Price per night (USD)'
                    required
                    onChange={(e) => setPrice(e.target.value)}
                    min={0}
                    />
                </label>
                {errors.price && <p className="display-errors">{errors.price}</p>}
            </div>
            <div className='form-images'>
                <h2>Liven up your spot with photos</h2>
                <p>Submit a link to at least one photo to publish your spot</p>
                <label>
                    <input
                    type='url'
                    value={previewImg}
                    placeholder='Preview Image URL'
                    required
                    onChange={(e) => setPreviewImg(e.target.value)}
                    />
                </label>
                <label>
                    <input
                    type='url'
                    placeholder='Image URL'
                    />
                </label>
                <label>
                    <input
                    type='url'
                    placeholder='Image URL'
                    />
                </label>
                <label>
                    <input
                    type='url'
                    placeholder='Image URL'
                    />
                </label>
                <label>
                    <input
                    type='url'
                    placeholder='Image URL'
                    />
                </label>
            </div>
        </div>
        <button className='form-submit-button'>Create Spot</button>
    </form>
  );
};

export default SpotForm;

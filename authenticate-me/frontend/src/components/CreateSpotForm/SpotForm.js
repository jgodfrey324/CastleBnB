//you are creating this form page next!!
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postSpot, putSpot, postSpotImage, getOneSpot } from '../../store/spots';
import './SpotForm.css';



const SpotForm = ({ spot, formType }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const [country, setCountry] = useState(spot?.country);
  const [address, setAddress] = useState(spot?.address);
  const [city, setCity] = useState(spot?.city);
  const [state, setState] = useState(spot?.state);
  const [latitude, setLatitude] = useState(spot?.latitude);
  const [longitude, setLongitude] = useState(spot?.longitude);
  const [description, setDescription] = useState(spot?.description);
  const [name, setName] = useState(spot?.name);
  const [price, setPrice] = useState(spot?.price);
  //preview image recieved from spot sent as prop is not showing up....
  const [previewImg, setPreviewImg] = useState(spot?.previewImage);
  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');
  const [img3, setImg3] = useState('');
  const [img4, setImg4] = useState('');
  const [errors, setErrors] = useState({});

    //if a user logs out on this form they should be redirected to home
    if (!sessionUser) history.push('/');

    //disable buttton if form not filled
    const disabled = (country, address, city, state, description, name, price, previewImg) => {
        if (!country || !address || !city || !state || !description || !name || !price || !previewImg) return true;
        return false;
    }
    //return val of disabled func
    const disabledFuncReturn = disabled(country, address, city, state, description, name, price, previewImg);
    //set additional class name for buttons that are disabled
    const buttonClassFunc = (disabledFuncReturn) => {
        let buttonClass;
        if (disabledFuncReturn) buttonClass = 'form-submit-button hover-off';
        else buttonClass = 'form-submit-button'
        return buttonClass;
    }

    //reset form after successful submition
  const reset = () => {
    setCountry(spot?.country);
    setAddress(spot?.address);
    setCity(spot?.city);
    setState(spot?.state);
    setLatitude(spot?.latitude);
    setLongitude(spot?.longitude);
    setDescription(spot?.description);
    setName(spot?.name);
    setPrice(spot?.price);
  }

  //handle submition func
  const handleSubmit = async (e) => {
    e.preventDefault();

    //setting spot according to incorporation of lat and lng
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

    const previewImage = {
        url: previewImg,
        preview: true
    }

    const image1 = {
        url: img1,
        preview: false
    }

    const image2 = {
        url: img2,
        preview: false
    }

    const image3 = {
        url: img3,
        preview: false
    }

    const image4 = {
        url: img4,
        preview: false
    }

    //checking for type to dispatch correct action
    if (formType === 'post') {
        dispatch(postSpot(spot))
          .then(spotInfo => {
            dispatch(postSpotImage(spotInfo.id, previewImage));
            if(image1.url) dispatch(postSpotImage(spotInfo.id, image1));
            if(image2.url) dispatch(postSpotImage(spotInfo.id, image2));
            if(image3.url) dispatch(postSpotImage(spotInfo.id, image3));
            if(image4.url) dispatch(postSpotImage(spotInfo.id, image4));
            return spotInfo;
          })
          .then(spotInfo => dispatch(getOneSpot(spotInfo.id)))
        //getting data from dispatch, awaiting it, then using data to redirect to new spot details
          .then(spotInfo => history.push(`/spots/${spotInfo.id}`))
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) {
              setErrors(data.errors);
              //sending alert so the errors on screen are noticed
              return alert('Whoops! Looks like you need to check some fields');
            }
        });
        //reseting form if spot created/updated
        return reset();
    } else if (formType === 'put') {
        dispatch(putSpot(spot, spotId))
          .then(spotInfo => history.push(`/spots/${spotInfo.id}`))
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) {
              setErrors(data.errors);
              return alert('Whoops! Looks like you need to check some fields');
            }
        });
        return reset();
    }

  };

  return (
    <form id={formType} onSubmit={handleSubmit}>
        {/* displaying different title based on form type */}
        <h1>{formType === 'post' ? 'Create a new Spot' : 'Update your Spot'}</h1>
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
                    maxLength={50}
                    required
                    onChange={(e) => setCountry(e.target.value)}
                    />
                </label>
                {errors.country && <p className="display-errors">*{errors.country}</p>}
                <label>
                    Street Address
                    <input
                    type='text'
                    value={address}
                    placeholder='Address'
                    maxLength={100}
                    required
                    onChange={(e) => setAddress(e.target.value)}
                    />
                </label>
                {errors.address && <p className="display-errors">*{errors.address}</p>}
                <div className='form-city-state'>
                    <div className='errors-under-labels'>
                        <label id='city'>
                            City
                            <input
                            type='text'
                            value={city}
                            placeholder='City'
                            maxLength={50}
                            required
                            onChange={(e) => setCity(e.target.value)}
                            />
                        </label>
                        {errors.city && <p className="display-errors">*{errors.city}</p>}
                    </div>
                    <span> , </span>
                    <div className='errors-under-labels'>
                        <label id='state'>
                            State
                            <input
                            type='text'
                            value={state}
                            placeholder='State'
                            maxLength={50}
                            required
                            onChange={(e) => setState(e.target.value)}
                            />
                        </label>
                        {errors.state && <p className="display-errors" id='state-errors'>*{errors.state}</p>}
                    </div>
                </div>
                <div className='form-lat-lng'>
                    <label id='lat'>
                        Latitude
                        <input
                        type='number'
                        value={latitude}
                        placeholder='Latitude'
                        onChange={(e) => setLatitude(e.target.value)}
                        />
                    </label>
                    <span> , </span>
                    {errors.lat && <p className="display-errors">*{errors.latitude}</p>}
                    <label id='lng'>
                        Longitude
                        <input
                        type='number'
                        value={longitude}
                        placeholder='Longitude'
                        onChange={(e) => setLongitude(e.target.value)}
                        />
                    </label>
                    {errors.lng && <p className="display-errors">*{errors.longitude}</p>}
                </div>
            </div>
            <div className='form-description'>
                <h2>Describe your place to guests</h2>
                <p>Mention the best feature of your space, any special amenities like fast wifi or parking, and what you love about the neighborhood.</p>
                <label>
                    <textarea
                    value={description}
                    placeholder='Please write at least 30 characters...'
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    minLength={30}
                    maxLength={1000}
                    />
                </label>
                {errors.description && <p className="display-errors">*{errors.description}</p>}
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
                {errors.name && <p className="display-errors">*{errors.name}</p>}
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
                {errors.price && <p className="display-errors">*{errors.price}</p>}
            </div>
            {formType === 'post' && (
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
                        value={img1}
                        placeholder='Image URL'
                        onChange={(e) => setImg1(e.target.value)}
                        />
                    </label>
                    <label>
                        <input
                        type='url'
                        value={img2}
                        placeholder='Image URL'
                        onChange={(e) => setImg2(e.target.value)}
                        />
                    </label>
                    <label>
                        <input
                        type='url'
                        value={img3}
                        placeholder='Image URL'
                        onChange={(e) => setImg3(e.target.value)}
                        />
                    </label>
                    <label>
                        <input
                        type='url'
                        value={img4}
                        placeholder='Image URL'
                        onChange={(e) => setImg4(e.target.value)}
                        />
                    </label>
                </div>
            )}
        </div>
        <div className='form-button-house'>
            <button className={buttonClassFunc(disabledFuncReturn)}
                    disabled={disabledFuncReturn}
                    >{formType === 'post' ? 'Create Spot' : 'Update Spot'}</button>
        </div>
    </form>
  );
};

export default SpotForm;

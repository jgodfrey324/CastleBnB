import { useSelector } from 'react-redux';

const SpotImages = ({ spotId }) => {
    const spot = useSelector(state => state.spots.singleSpot[spotId]);
    const images = spot.SpotImages;

    if (!spot.address) return null;
    if (!images.length) return <p>No current images</p>

    const isPreview = (image) => {
        if (image.preview) return true;
        return false;
    }

    return (
        <div className='images-house'>
            <div className='preview'>
                {images.map(image => {
                    if (isPreview(image)) {
                        return (
                            <img key={image.id} src={image.url} alt={`Gallery of ${spot.name}`}></img>
                        )
                    }
                    return null;
                })}
            </div>
            <div className='plain-janes'>
                {images.map(image => {
                    if (!isPreview(image)) {
                        return (
                            <img key={image.id} src={image.url} alt={`Gallery of ${spot.name}`}></img>
                        )
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default SpotImages;

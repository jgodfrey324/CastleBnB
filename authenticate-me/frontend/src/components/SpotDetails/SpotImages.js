import { useSelector } from 'react-redux';

const SpotImages = ({ spotId }) => {
    const spot = useSelector(state => state.spots.singleSpot[spotId]);
    const images = spot.SpotImages;

    if (!spot.address) return null;
    if (!images.length) return <p>No current images</p>

    const isPreview = (image) => {
        if (image.preview) return 'preview';
        return 'plain-janes';
    }

    return (
        <div className='images-house'>
            {images.map(image => {
                return (
                    <img key={spot.id} src={image.url} alt={`Gallery of ${spot.name}`} className={isPreview(image)}></img>
                )
            })}
        </div>
    )
}

export default SpotImages;

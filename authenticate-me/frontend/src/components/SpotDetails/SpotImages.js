import { useSelector } from 'react-redux';

const SpotImages = ({ spotId }) => {
    const spot = useSelector(state => state.spots[spotId]);
    const images = spot.SpotImages;
    console.log('images: ', images);

    if (!spot) return null;
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
    // return <p>i'm the images, i'm here</p>;
}

export default SpotImages;

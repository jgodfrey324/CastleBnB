import { useParams } from 'react-router-dom';

const SpotDetails = () => {
    const { spotId } = useParams();

    return <h1>I am the spot details from {spotId}</h1>
}

export default SpotDetails;

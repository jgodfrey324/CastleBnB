import { useDispatch } from 'react-redux';
import { deleteSpot } from '../../store/spots';
import { useModal } from '../../context/Modal';
import './DeleteModal.css';

const DeleteSpotModal = ({ spotId }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteSpot(spotId));
        closeModal();
    };

    return (
        <div className="delete-modal">
            <h1>Confirm Delete</h1>
            <p>Are you sure you want to remove this spot from the listings?</p>
            <div className='delete-modal-button-house'>
                <button className="delete-modal-buttons"
                        id='yes-button'
                        onClick={handleDelete}>Yes (Delete Spot)</button>
                <button className="delete-modal-buttons" id='no-button'>No (Keep Spot)</button>
            </div>
        </div>
    )
}

export default DeleteSpotModal;

import { useDispatch } from 'react-redux';
import { deleteReview } from '../../store/reviews';
import { useModal } from '../../context/Modal';
import '../ManageSpots/DeleteModal.css';

const DeleteReviewModal = ({ reviewId, setDeleted }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const handleDelete = async (e) => {
        e.preventDefault();
        return dispatch(deleteReview(reviewId))
                .then(setDeleted(true))
                .then(closeModal());
    };

    return (
        <div className="delete-modal">
        <h1>Confirm Delete</h1>
        <p>Are you sure you want to delete this review?</p>
        <div className='delete-modal-button-house'>
            <button className="delete-modal-buttons"
                    id='yes-button'
                    onClick={handleDelete}>Yes (Delete Review)</button>
            <button className="delete-modal-buttons"
                    id='no-button'
                    onClick={() => closeModal()}>No (Keep Review)</button>
        </div>
    </div>
    )
}

export default DeleteReviewModal;

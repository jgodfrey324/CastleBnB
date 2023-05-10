import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { postReview } from '../../store/reviews';
import { useModal } from '../../context/Modal';
import './PostReviewModal.css';

const PostReviewModal = ({ spotId }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const [review, setReview] = useState('');
    const [stars, setStars] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            review,
            stars
        }
        dispatch(postReview(newReview, spotId));
        closeModal();
    }

    const disableButton = (review, stars) => {
        if (review.length < 10) return true;
        if (stars < 1) return true;
        return false;
    }

    let className = "fa-regular fa-star fa-lg";
    // console.log('stars ', stars);


    return (
        <div className='add-review-house'>
            <h1>How was your stay?</h1>
            <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder='Leave your review here...'
                />
            <div className='star-box-span-house'>
                <div className='stars-box'>
                    <i className={className} style={{color: '#b39003'}}
                        onClick={() => {
                            setStars(1);
                            className += ' filled';
                        }}></i>
                    <i className={className} style={{color: '#b39003'}}
                        onClick={() => {
                            setStars(2);
                            className += ' filled';
                        }}></i>
                    <i className={className} style={{color: '#b39003'}}
                        onClick={() => {
                            setStars(3);
                            className += ' filled';
                        }}></i>
                    <i className={className} style={{color: '#b39003'}}
                        onClick={() => {
                            setStars(4);
                            className += ' filled';
                        }}></i>
                    <i className={className} style={{color: '#b39003'}}
                        onClick={() => {
                            setStars(5);
                            className += ' filled';
                        }}></i>
                </div>
                <span>Stars</span>

            </div>
            <button className='submit-review-button'
                    onClick={(e) => handleSubmit(e)}
                    disabled={disableButton(review, stars)}
            >Submit Your Review</button>
        </div>
    )
}

export default PostReviewModal;

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { postReview } from '../../store/reviews';
import { useModal } from '../../context/Modal';
import './PostReviewModal.css';

const PostReviewModal = ({ spotId, setPosted }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const [review, setReview] = useState('');
    const [stars, setStars] = useState(0);
    const [hoveredStar, setHoveredStar] = useState(0);
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newReview = {
            review,
            stars
        }

        return dispatch(postReview(newReview, spotId))
            .then(setPosted(true))
            .then(closeModal)
            .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) {
                setErrors(data.errors);
                return alert('Review must be filled out');
            }
        });
    }

    const disableButton = (review, stars) => (review.length < 10) || (stars < 1) ? true : false;

    //return val of disabled func
    const disabledFuncReturn = disableButton(review, stars);

    //set additional class name for buttons that are disabled
    const buttonClassFunc = (disabledFuncReturn) => {
      let buttonClass;
      if (disabledFuncReturn) buttonClass = 'submit-review-button hover-off';
      else buttonClass = 'submit-review-button'
      return buttonClass;
    }

    return (
        <form className='add-review-house' onSubmit={handleSubmit}>
            <h1>How was your stay?</h1>
            <textarea
                value={review}
                maxLength={1000}
                onChange={(e) => setReview(e.target.value)}
                placeholder='Leave your review here...'
                />
            {(errors.review || errors.stars) && (
            <>
                <p className='display-errors'>*{errors.review}</p>
                <p className='display-errors'>*{errors.stars}</p>
            </>
                )}
            <div className='star-box-span-house'>
                <div className='stars-box'>
                    {[...Array(5)].map((spot, i) => {
                        const starVal = i + 1;
                        return (
                            <label key={starVal}>
                                <input
                                    type='radio'
                                    value={starVal}
                                    id='1'
                                    name='stars'
                                    onChange={(e) => setStars(e.target.value)}
                                />
                                <i className="fa-solid fa-star"
                                    onMouseEnter={() => setHoveredStar(starVal)}
                                    onMouseLeave={() => setHoveredStar(0)}
                                    style={{color: (starVal <= stars) || (starVal <= hoveredStar) ? '#B39002' : '#8080809f'}}
                                ></i>
                            </label>
                        )
                    })}
                </div>
                <span>Stars</span>

            </div>
            <button className={buttonClassFunc(disabledFuncReturn)} disabled={disabledFuncReturn}
            >Submit Your Review</button>
        </form>
    )
}

export default PostReviewModal;

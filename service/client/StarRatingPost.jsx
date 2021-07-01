import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./index.css";

const StarRatingPost = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    return <div>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
                <label>
                    <input id="rating"
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}

                    />
                    <FaStar
                        size={10}
                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                    />

                </label>
            )
        })}
        <p>The chosen rating is {rating}</p>
    </div>
}

export default StarRatingPost



import ReactStars from "react-rating-stars-component";
import React, { useState } from "react";


function StarRating() {
    const [rating, setRating] = useState(3)
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (<ReactStars
        count={5}

        value={rating}
        size={24}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
    />)
}

export default StarRating
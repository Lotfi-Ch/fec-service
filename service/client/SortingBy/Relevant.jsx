import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";



const Relevant = (props) => {

    const [addReview, setAddReview] = useState(2)

    console.log("relevant ", props.data)
    const sort = (array) => {
        return array.sort(function (a, b) {
            return new Date(b.helpfulness + b.date) - new Date(a.helpfulness + a.date);
        })
    }
    function addRender() {
        setAddReview(addReview + 2)
    }
    console.log(addReview)

    return (<div>
        {props.data && sort(props.data).map((review) => {
            if (props.data.indexOf(review) >= addReview) {
                return
            }
            else {
                return (<div key={props.data.indexOf(review)} className="border-b-2 p-4">
                    <div className="flex justify-between">
                        <StarRatings
                            count={5}
                            rating={review.rating}
                            size={32}
                            isHalf={true}
                            emptyIcon={<i i className="far fa-star" ></i >}
                            halfIcon={<i i className="fa fa-star-half-alt" ></i >}
                            fullIcon={<i i className="fa fa-star" ></i >}
                            starRatedColor="#ffd700"
                            starDimension="15px"
                            starSpacing="2px"
                        />
                        <div className="flex justify-end">
                            <div className="px-1">{review.reviewer_name} </div>
                            <div>{review.date.slice(0, 10)} </div>
                        </div>
                    </div>
                    <div className="font-medium">{review.summary} </div>
                    <div>{review.body} </div>
                    <div className="rounded bg-gray-200">
                        <p>Response: </p>
                        <div> {review.response} </div>
                    </div>
                    <div className="flex gap-2 text-xs">
                        <div className="font-medium "> helpful ?</div>
                        <a>Yes |</a> <a>Report</a>
                    </div>

                </div>)
            }
        })}
        <button className="p-2 border-b-2" onClick={addRender}> MORE REVIEWS</button>
    </div>)
}

export default Relevant;
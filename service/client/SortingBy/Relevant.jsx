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

    // className = "overflow-auto h-36"
    return (
        <>
            <div >
                {props.data && sort(props.data).map((review) => {
                    if (props.data.indexOf(review) >= addReview) {
                        return
                    }
                    else {
                        return (<div key={props.data.indexOf(review)} className="border-b-2 p-4">
                            <div className="flex justify-between p-2">
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
                                    <div className="px-2">{review.reviewer_name} </div>
                                    <div>{review.date.slice(0, 10)} </div>
                                </div>
                            </div>
                            <div className="font-medium p-2">{review.summary} </div>
                            <div className="p-2">{review.body} </div>
                            {review.response && <div className="rounded bg-gray-200 p-2">
                                <p>Response: </p>
                                <div> {review.response} </div>
                            </div>
                            }
                            <div className="flex gap-2 text-xs p-2">
                                <div className="font-medium "> helpful ?</div>
                                <a>Yes |</a> <a>Report</a>
                            </div>

                        </div>)
                    }
                })}</div>
            <div className="flex">
                <button className="p-2 border-b-2 hover:bg-gray-200 font-medium" onClick={addRender}> MORE REVIEWS</button>
                <button className="p-2 border-b-2 hover:bg-gray-200 font-medium" onClick={() => {
                    props.change("add review")
                    props.open()
                }}> ADD A REVIEW </button>
            </div>
        </>)
}

export default Relevant;
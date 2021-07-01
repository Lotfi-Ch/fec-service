import "./index.css";
import React, { useState, useEffect } from "react";
import axios from "axios"
import StarRating from './StarRating.jsx';
import Progress from "./ProgressBars.jsx";
import StarRatings from "react-star-ratings";


function App() {
    const [data, setData] = useState([]);
    const [product_id, setId] = useState(11002);
    const [rating, setRating] = useState(null)



    useEffect(
        () => {
            axios.get(`/reviews/${product_id}`)
                .then(result => {
                    setData(result.data)
                })
                .catch(err =>
                    console.error(err))
        }, []
    )



    return (
        <>
            <p className="p-8  text-3xl"> RATING & REVIEWS </p>
            <div className="flex p-8 gap-2">
                <section className="flex-initial p-2 "  >
                    <div className="flex">
                        <div className="text-4xl font-medium">{rating}</div>
                        <StarRating className="content-end" data={data.results} rating={rating} average={setRating} />
                    </div>
                    <div>100% of reviews recommend this product</div>
                    <Progress data={data.results} />
                    <div> Size </div>
                    <div>bar of the size </div>
                    <div> Comfort </div>
                    <div>bar of the comfort </div>

                </section>
                <section className="flex-grow p-2 ">
                    <div className="flex">
                        <p className="font-medium text-2xl">{data.count} reviews, sorted by</p>
                        <select className="gap-2" >
                            <option className="gap-2">relavant reviews</option>
                            <option className="gap-2">newest reviews</option>
                            <option className="gap-2">helpful reviews</option>
                        </select>
                    </div>
                    <div>
                        {data.results && data.results.map((review) => {
                            return (<div key={data.results.indexOf(review)} className="border-b-2">
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
                                        <div>{review.reviewer_name} </div>
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
                        })}







                    </div>

                </section>
            </div>
        </>

    )
}

export default App;
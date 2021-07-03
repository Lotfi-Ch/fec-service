import "./index.css";
import React, { useState, useEffect } from "react";
import axios from "axios"

import StarRating from './StarRating.jsx';
import Progress from "./leftComponent/ProgressBars.jsx";
import Newest from "./SortingBy/Newest.jsx";
import Helpful from "./SortingBy/Helpful.jsx";
import Relevant from "./SortingBy/Relevant.jsx";
import Rating from "./leftComponent/Rating.jsx";
import Characteristics from "./leftComponent/Characteristics.jsx";







function App() {
    const [data, setData] = useState([]);
    const [characteristics, setCharacteristics] = useState([])
    const [product_id, setId] = useState(11001);
    const [rating, setRating] = useState(null)
    const [newest, setNew] = useState(false)
    const [helpful, setHelp] = useState(false)
    const [relevant, setRelevant] = useState(true)
    const [stars, setStar] = useState(null)
    const [ratingStars, setRatingStars] = useState(false)
    const [recommend, setRecommend] = useState(false)
    const [percentage, setPercentage] = useState(0)



    useEffect(
        () => {
            axios.get(`/reviews/${product_id}`)
                .then(result => {
                    setData(result.data)
                })
                .catch(err =>
                    console.error(err))
            axios.get(`/reviews/meta/${product_id}`)
                .then(result => {
                    setCharacteristics(result.data)
                })
                .catch(err =>
                    console.error(err))
        }, []
    )

    const changeRender = (val) => {
        if (val === "newest") {
            setRelevant(false)
            setNew(true)
            setHelp(false)
            setRatingStars(false)
        } else if (val === "helpful") {
            setRelevant(false)
            setNew(false)
            setHelp(true)
            setRatingStars(false)
        } else if (val === "relevent") {
            setRelevant(true)
            setNew(false)
            setHelp(false)
            setRatingStars(false)
        } else if (val === "stars") {
            setRelevant(false)
            setNew(false)
            setHelp(false)
            setRatingStars(true)
        }
    }

    function recommended() {

        if (data.results && !recommend) {
            let result;
            setRecommend(true)
            const sum = data.results.length

            let count = 0
            data.results.map((review) => {
                if (review.recommend) count++
            })
            result = ((count / sum) * 100).toFixed(2)
            setPercentage(result)
        }
    }
    recommended()



    return (
        <>
            <p className="p-8  text-3xl"> RATING & REVIEWS </p>
            <div className="flex p-8 gap-2">
                <section className="flex-initial p-2 "  >
                    <div className="flex">
                        <div className="text-4xl font-medium">{rating}</div>
                        <StarRating className="content-end" data={data.results} rating={rating} average={setRating} />
                    </div>
                    <div>{percentage}% of reviews recommend this product</div>
                    <Progress change={changeRender} stars={stars} setStar={setStar} data={data.results} />
                    <Characteristics className="gap-y-44" data={characteristics.characteristics} />

                </section>
                <section className="flex-grow p-2 ">
                    <div className="flex">
                        <p className="font-medium text-2xl">{data.results && data.results.length} reviews, sorted by</p>
                        <select onChange={(e) => changeRender(e.target.value)} className="gap-2" >
                            <option value={"relevent"} className="gap-2">relavant reviews</option>
                            <option value={"newest"} className="gap-2">newest reviews</option>
                            <option value={"helpful"} className="gap-2">helpful reviews</option>
                        </select>
                    </div>
                    {relevant && <Relevant className="border-b-2" data={data.results} />}
                    {newest && <Newest className="border-b-2" data={data.results} />}
                    {helpful && <Helpful className="border-b-2" data={data.results} />}
                    {ratingStars && <Rating className="border-b-2" stars={stars} data={data.results} />}

                </section>
            </div>
        </>

    )
}

export default App;
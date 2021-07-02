import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";



const Progress = (props) => {
    const [sum, setSum] = useState(null);
    const [star11, setStar1] = useState(0);
    const [star22, setStar2] = useState(0);
    const [star33, setStar3] = useState(0);
    const [star44, setStar4] = useState(0);
    const [star55, setStar5] = useState(0);
    const [render, setRender] = useState(false)

    let star1 = 0;
    let star2 = 0;
    let star3 = 0;
    let star4 = 0;
    let star5 = 0;

    function progress() {

        if (props.data && !render) {
            setRender(true)
            setSum(props.data.length)
            // to be refactored using switch case 
            props.data.forEach(element => {
                if (element.rating === 1) {
                    star1 += 1
                    setStar1(star1)
                } else if (element.rating === 2) {
                    star2 += 1
                    setStar2(star2)
                } else if (element.rating === 3) {
                    star3 += 1
                    setStar3(star3)
                } else if (element.rating === 4) {
                    star4 += 1
                    setStar4(star4)
                } else if (element.rating === 5) {
                    star5 += 1
                    setStar5(star5)

                }

            })
        }

    }


    progress()

    return (
        <>
            <div onClick={() => {
                if (props.stars === 5) {
                    props.change("relevent")
                } else {
                    props.change("stars")
                    props.setStar(5)
                }
            }}>5 stars
                {props.data && <ProgressBar bgColor="#32CD32" completed={(star55 / sum) * 100} />}
            </div>
            <div onClick={() => {
                if (props.stars === 4) {
                    props.change("relevent")
                } else {
                    props.change("stars")
                    props.setStar(4)
                }
            }} >4 stars
                {props.data && <ProgressBar bgColor="#32CD32" completed={(star44 / sum) * 100} />}
            </div>
            <div onClick={() => {
                if (props.stars === 3) {
                    props.change("relevent")
                } else {
                    props.change("stars")
                    props.setStar(3)
                }
            }} >3 stars
                {props.data && <ProgressBar bgColor="#32CD32" completed={(star33 / sum) * 100} />}
            </div>
            <div onClick={() => {
                if (props.stars === 2) {
                    props.change("relevent")
                } else {
                    props.change("stars")
                    props.setStar(2)
                }
            }} >2 stars
                {props.data && <ProgressBar bgColor="#32CD32" completed={(star22 / sum) * 100} />}
            </div>
            <div onClick={() => {
                if (props.stars === 1) {
                    props.change("relevent")
                } else {
                    props.change("stars")
                    props.setStar(1)
                }
            }}  >1 stars
                {props.data && <ProgressBar bgColor="#32CD32" completed={(star11 / sum) * 100} />}
            </div>
        </>
    )

}

export default Progress


 // props.data.forEach(element => {
            //     console.log(element.rating)

            // switch (element.rating) {

            //     case 1:
            //         star1++;
            //         break;
            //     case 2:
            //         star2++;
            //         break;
            //     case 3:
            //         star3++;
            //         console.log(element.rating)
            //         break;
            //     case 4:
            //         star4++;
            //         break;
            //     case 5:
            //         star5++;
            //         break;

            // }
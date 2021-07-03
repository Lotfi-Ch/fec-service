import React, { useEffect, useState } from "react";

import { Slider, Typography } from '@material-ui/core';

const Characteristics = (props) => {

    const [render, setRender] = useState(false)
    const [comfort, setComfort] = useState(0)
    const [fit, setFit] = useState(0)
    const [length, setLength] = useState(0)
    const [quality, setQuality] = useState(0)


    // const initChar = () => {
    //     if (props.data && !render) {
    //         setRender(true)
    //         setComfort(props.data.Comfort.value.slice(0, 1))
    //         setFit(+props.data.Fit.value.slice(0, 1))
    //         setLength(+props.data.Length.value.slice(0, 1))
    //         setQuality(+props.data.Quality.value.slice(0, 1))
    //     }
    // }

    // initChar()

    console.log(props.data, "charararararrara")

    return (
        <div >

            {/* <div className="py-6">
                <div className="font-bold">Fit</div>
                <Slider
                    value={fit}
                    max={5}
                    aria-labelledby="discrete-slider-always"
                    valueLabelDisplay="on"
                />
                <div className="flex justify-between text-xs">
                    <div>Too small</div>
                    <div>Perfect</div>
                    <div>Too large</div>
                </div>
            </div>


            <div className="py-1">
                <div className="font-bold">Comfort</div>
                <Slider
                    value={comfort}
                    max={5}
                    aria-labelledby="discrete-slider-always"
                    valueLabelDisplay="on"
                />
                <div className="flex justify-between text-xs">
                    <div>Poor</div>
                    <div>Perfect</div>
                </div>
            </div>

            <div className="py-1">
                <div className="font-bold">Quality</div>
                <Slider
                    value={quality}
                    max={5}
                    aria-labelledby="discrete-slider-always"
                    valueLabelDisplay="on"
                />
                <div className="flex justify-between text-xs">
                    <div>Too small</div>
                    <div>Perfect</div>
                    <div>Too large</div>
                </div>
            </div>

            <div className="py-1">
                <div className="font-bold">Length</div>
                <Slider
                    value={length}
                    max={5}
                    aria-labelledby="discrete-slider-always"
                    valueLabelDisplay="on"
                />
                <div className="flex justify-between text-xs">
                    <div>Poor</div>
                    <div>Perfect</div>
                </div>
            </div> */}

        </div>
    )

}

export default Characteristics;
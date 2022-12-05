import { ReactComponent as RightArrow } from "../../assets/icons/rightArrow.svg"
import { ReactComponent as LeftArrow } from "../../assets/icons/leftArrow.svg"
import readyButton from "../../assets/imgs/readyBtn.png"
import { useState } from "react"


function Slider({ arrayImg }: any) {

    const [isActive, setIsActive] = useState(arrayImg)
    const [button, setButton] = useState(0)

    const handleClick = (direction: string) => {

        let initial = isActive[0];
        let mid = isActive[1];
        let last = isActive[2];

     
        if (direction === 'left') {
            setIsActive([last, initial, mid])
            if (button === 2) {
                setButton(0)
            }
            if (button < 2) {
                setButton(button + 1)
            }

        }
        else if (direction === 'right') {
            setIsActive([mid, last, initial])
            if (button <= 0) {
                setButton(2)
            }
            if (button > 0) {
                setButton(button - 1)
            }
        }
    }

    return (
        <div className='slider'>
            <div className="overlay" />
            {isActive.map((img: any, index: number) => {
                return (
                    
                    <div key={img.id} className="wrapperSlider">
                        
                        { isActive.indexOf(img) === 1 &&
                        <div className="cardSlider">
                            <div style={{width: '700px'}}>
                                <h1>{img?.title}</h1>
                                <h5>{img?.subTitle}</h5>
                            </div>
                            <div className="btnWrapper">
                                <img className='readyBtn' src={readyButton} alt='btn_ready'></img>
                                <span className="lineBtn"></span>
                            </div>
                        </div>
                        }
                        <img
                            key={index}
                            className={`sliderImg ${isActive.indexOf(img) === 1 ? "active" : ""}`}
                            src={img?.image}>
                        </img>
                        
                    </div>
                )
            })
            }

            <div className="navSlider">
                <RightArrow className='sliderNav' onClick={() => handleClick('left')} style={{ left: '620px' }} />
                <LeftArrow className='sliderNav' onClick={() => handleClick('right')} style={{ right: '620px' }} />
                <div className="navButtonSlider">

                    <div className="buttonSliderWrapper">
                        {arrayImg?.map((item: any, index: number) => {
                            return (
                                <div key={index} className={button !== index ? "buttonSlider" : "buttonSlider btnActive"}><span>{index + 1}</span></div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
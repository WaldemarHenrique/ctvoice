
import heroimg01 from "../../assets/imgs/hero01.jpg"
import heroimg02 from "../../assets/imgs/hero02.jpg"
import heroimg03 from "../../assets/imgs/hero03.jpg"
import Slider from "../Slider";

function Hero() {

    const MarvelData = [
        {  
            id: 2,
            name : 'heroimg02',
            title: "THE GREAT SPIDER MAN",
            subTitle: "WHEN, WHERE, WHO!",
            image : heroimg02
        },
        {
            id: 1,
            name : 'heroimg01',
            title: "THE HUNT FOR WOLVERINE KICKS OFF THIS APRIL",
            subTitle: "CHARLES SOULE AND DAVID MARQUEZ UNRAVEL THE MYSTERY",
            image : heroimg01
        },
        {
            id: 3,
            name : 'heroimg03',
            title: "IPSON LIRUS",
            subTitle: "IPSON LIRUS IPSON LIRUS IPSON LIRUS",
            image : heroimg03
        },
    ]

    return (
        <div className={'heroContainer'}>
            <div className='hero'>
                <Slider arrayImg={MarvelData} />
            </div>
        </div>
    );
}

export default Hero;
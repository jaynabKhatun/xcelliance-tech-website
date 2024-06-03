

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/banner/1.png'
import banner2 from '../../../assets/banner/2.png'
import banner3 from '../../../assets/banner/3.png'
import banner4 from '../../../assets/banner/4.png'
import banner5 from '../../../assets/banner/5.png'

const Banner = () => {

    return (
        <Carousel autoPlay={true} infiniteLoop={true}>
            <div>
                <img src={banner1} />

            </div>
            <div>
                <img src={banner2} />

            </div>
            <div>
                <img src={banner3} />

            </div>
            <div>
                <img src={banner4} />

            </div>
            <div>
                <img src={banner5} />

            </div>
        </Carousel>
    );
};

export default Banner;
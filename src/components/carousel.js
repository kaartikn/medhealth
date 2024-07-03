import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import medkitImage1 from '../assets/bg-img-1.jpg';
import medkitImage2 from '../assets/bg-img-2.jpg';
import medkitImage3 from '../assets/bg-img-3.jpg';


function StockImageCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <Image className='carousel-image' src={medkitImage1} />
            </Carousel.Item>
            <Carousel.Item>
                <Image className='carousel-image' src={medkitImage2} />
            </Carousel.Item>
            <Carousel.Item>
                <Image className='carousel-image' src={medkitImage3} />
            </Carousel.Item>
        </Carousel>

    )
}

export default StockImageCarousel;

import img1 from '../resources/black-male-glasses.png'
import img2 from '../resources/dark-female-braids.png'
import img3 from '../resources/black-male.png'
import Slider from "react-slick";
import styles from '../styles/Auth.module.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SvgComponent from './SVGShape';

const images = [
  {image: img1, caption: 'Earn Points and Level Up Your Talent Profile'},
  {image: img2, caption: 'Get Discovered by Top Companies'},
  {image: img3, caption: 'Receive Feedback and Recognition from Industry Professionals'}
];

function NextArrow(props:any) {
    const { onClick } = props;
    return (
      <div
      className='hover:shadow-xl transition-all'
        style={{ position: 'absolute', cursor: 'pointer', left: '54%', zIndex: 80, top: '90%' }}
        onClick={onClick}
      >
        <SvgComponent icon='circle-arrow-right' />
        </div>
    );
  }
  

function PrevArrow(props:any) {
    const { onClick } = props;
    return (
      <div
      className='hover:shadow-xl transition-all'
        style={{ position: 'absolute', cursor: 'pointer', left: '44%', zIndex: 80, top: '90%' }}
        onClick={onClick}
      >
        <SvgComponent icon='circle-arrow-left' />
        </div>
    );
  }
  

const AuthImgCarousel = () => {
  const settings = {
    dots: false,
    adaptiveHeight: true,
    infinite: true,
    prevArrow:  <PrevArrow />,
    nextArrow: <NextArrow/>,
    speed: 3500,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    cssEase: "linear",
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings} className="h-full relative">
      {images.map((image, index) => (
        <div key={index} className="h-full relative xl:ml-16 ">
            <h6 className={styles.carouselImageCaption}>{ image.caption }</h6>
          <img src={image.image} alt={`Slide ${index + 1}`} className={styles.carouselImage + " h-full w-full object-contain"} />
        </div>
      ))}
    </Slider>
  );
};

export default AuthImgCarousel
import React, { ReactElement } from "react";
import "../asset/css/index.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../asset/image/slider/200111-tao-hinh-ham-mat.jpg";
import image2 from "../asset/image/slider/195743-chup-pet-ct.jpg";
import image3 from "../asset/image/slider/192415-kham-tong-quat.jpg";
import image4 from "../asset/image/slider/193531-chup-mri.jpg";
import image5 from "../asset/image/slider/192804-tieu-duong-noi-tiet.jpg";
import image6 from "../asset/image/slider/194032-chup-ct-scanner.jpg";
import image7 from "../asset/image/slider/192415-kham-tong-quat.jpg";
import image8 from "../asset/image/slider/195926-bac-si-gia-dinh.jpg";
import image9 from "../asset/image/slider/194326-noi-soi-tieu-hoa.jpg";
import image10 from "../asset/image/slider/193531-chup-mri.jpg";
import image11 from "../asset/image/slider/182050-nha-khoa.jpg";
import image12 from "../asset/image/slider/152607-tu-va.jpg";

interface SpecialtyProps {}

export default function Specialty({}: SpecialtyProps): ReactElement {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className='slider__container'>
      <div className='slider__content'>
        <div className='slider__content-header'>
          <h2 className='slider__content-header__title'>Chuyên Khoa Phổ Biến</h2>
          <a href='/' className='slider__content-header__link'>
            Xem Thêm
          </a>
        </div>
        <Slider {...settings}>
          <div className='box__item'>
            <img src={image1} />
            <p>Cơ xương khớp</p>
          </div>
          <div className='box__item'>
            <img src={image2} />
            <p>Thần kinh</p>
          </div>
          <div className='box__item'>
            <img src={image3} />
            <p>Tiêu hóa</p>
          </div>
          <div className='box__item'>
            <img src={image4} />
            <p>Tim mạch</p>
          </div>
          <div className='box__item'>
            <img src={image5} />
            <p>Tai mũi họng</p>
          </div>
          <div className='box__item'>
            <img src={image10} />
            <p>Cột sống</p>
          </div>
          <div className='box__item'>
            <img src={image6} />
            <p>Y học cổ truyền</p>
          </div>
          <div className='box__item'>
            <img src={image7} />
            <p>Châm cứu</p>
          </div>
          <div className='box__item'>
            <img src={image8} />
            <p>Sản phụ khoa</p>
          </div>
          <div className='box__item'>
            <img src={image9} />
            <p>Siêu âm thai</p>
          </div>
          <div className='box__item'>
            <img src={image10} />
            <p>Nha khoa</p>
          </div>
          <div className='box__item'>
            <img src={image11} />
            <p>Da liễu</p>
          </div>
          <div className='box__item'>
            <img src={image12} />
            <p>Nội khoa</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

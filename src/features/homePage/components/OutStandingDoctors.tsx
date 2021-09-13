import React, { ReactElement } from "react";
import Slider from "react-slick";
import "../asset/css/index.scss";

interface OutStandingDoctorsProps {}

export default function OutStandingDoctors({}: OutStandingDoctorsProps): ReactElement {
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
          <h2 className='slider__content-header__title'>Bác sĩ nổi bật nhất tuần</h2>
          <a href='/' className='slider__content-header__link'>
            Xem Thêm
          </a>
        </div>
        <Slider {...settings}>
          <div className='box__item'>
            <img
              src={"https://picsum.photos/id/237/200/300"}
              alt=''
              className='box__item--circle'
            />
            <div className='info'>
              <p className='info__degree'>PGS,Tiến sĩ:Hoàng Tuấn Anh</p>
              <p className='info__department'>Cơ xương khớp</p>
            </div>
          </div>
          <div className='box__item'>
            <img
              src={"https://picsum.photos/id/237/200/300"}
              alt=''
              className='box__item--circle'
            />
            <div className='info'>
              <p className='info__degree'>PGS,Tiến sĩ:Hoàng Tuấn Anh</p>
              <p className='info__department'>Cơ xương khớp</p>
            </div>
          </div>
          <div className='box__item'>
            <img
              src={"https://picsum.photos/id/237/200/300"}
              alt=''
              className='box__item--circle'
            />
            <div className='info'>
              <p className='info__degree'>PGS,Tiến sĩ:Hoàng Tuấn Anh</p>
              <p className='info__department'>Cơ xương khớp</p>
            </div>
          </div>
          <div className='box__item'>
            <img
              src={"https://picsum.photos/id/237/200/300"}
              alt=''
              className='box__item--circle'
            />
            <div className='info'>
              <p className='info__degree'>PGS,Tiến sĩ:Hoàng Tuấn Anh</p>
              <p className='info__department'>Cơ xương khớp</p>
            </div>
          </div>
          <div className='box__item'>
            <img
              src={"https://picsum.photos/id/237/200/300"}
              alt=''
              className='box__item--circle'
            />
            <div className='info'>
              <p className='info__degree'>PGS,Tiến sĩ:Hoàng Tuấn Anh</p>
              <p className='info__department'>Cơ xương khớp</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

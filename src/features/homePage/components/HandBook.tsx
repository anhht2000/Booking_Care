import React, { ReactElement } from "react";
import Slider from "react-slick";
import "../asset/css/index.scss";

interface HandBookProps {}

export default function HandBook({}: HandBookProps): ReactElement {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div className='slider__container'>
      <div className='slider__content'>
        <div className='slider__content-header'>
          <h2 className='slider__content-header__title'>Cẩm nang</h2>
          <a href='/' className='slider__content-header__link'>
            Xem Thêm
          </a>
        </div>
        <Slider {...settings}>
          <div className='box__item-handbook'>
            <img
              src={"https://picsum.photos/id/237/200/300"}
              alt=''
              className='box__item-handbook-img'
            />
            <p className='box__item-handbook-title'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, facere.
            </p>
          </div>
          <div className='box__item-handbook'>
            <img
              src={"https://picsum.photos/id/237/200/300"}
              alt=''
              className='box__item-handbook-img'
            />
            <p className='box__item-handbook-title'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, facere.
            </p>
          </div>
          <div className='box__item-handbook'>
            <img
              src={"https://picsum.photos/id/237/200/300"}
              alt=''
              className='box__item-handbook-img'
            />
            <p className='box__item-handbook-title'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, facere.
            </p>
          </div>
          <div className='box__item-handbook'>
            <img
              src={"https://picsum.photos/id/237/200/300"}
              alt=''
              className='box__item-handbook-img'
            />
            <p className='box__item-handbook-title'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, facere.
            </p>
          </div>
          <div className='box__item-handbook'>
            <img
              src={"https://picsum.photos/id/237/200/300"}
              alt=''
              className='box__item-handbook-img'
            />
            <p className='box__item-handbook-title'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, facere.
            </p>
          </div>
          <div className='box__item-handbook'>
            <img
              src={"https://picsum.photos/id/237/200/300"}
              alt=''
              className='box__item-handbook-img'
            />
            <p className='box__item-handbook-title'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, facere.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

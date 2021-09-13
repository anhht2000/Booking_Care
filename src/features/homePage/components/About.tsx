import React, { ReactElement } from "react";
import "../asset/css/about.scss";

interface AboutProps {}

export default function About({}: AboutProps): ReactElement {
  return (
    <div className='about'>
      <div className='about__title'>Truyền thông nói gì về BookingCare</div>
      <div className='about__media'>
        <iframe
          width='570'
          height='321'
          src='https://www.youtube.com/embed/FyDQljKtWnI'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        ></iframe>
      </div>
      <div className='about__info'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima voluptas voluptates quaerat
        inventore voluptatem non, animi laboriosam soluta perferendis harum!
      </div>
    </div>
  );
}

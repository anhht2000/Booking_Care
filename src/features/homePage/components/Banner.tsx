import React, { ReactElement } from "react";
import { FormattedMessage } from "react-intl";
import logoApp from "../asset/image/app-store-badge-black.svg";
import xetnghiem from "../asset/image/dichvu_xetnghiem.png";
import logoGG from "../asset/image/google-play-badge.svg";
import chuyenkhoa from "../asset/image/kham_chuyenkhoa.png";
import nhakhoa from "../asset/image/kham_nhakhoa.png";
import tongquat from "../asset/image/kham_tongquat.png";
import tuxa from "../asset/image/kham_tuxa.png";
import "../asset/css/header.scss";
import suckhoe from "../asset/image/suckhoe_tinhthan.png";

interface BannerProps {}

export default function Banner({}: BannerProps): ReactElement {
  return (
    <div className='banner'>
      <div className='banner__container'>
        <div className='banner__container-content'>
          <p className='banner__container-content-text'>
            <FormattedMessage id='banner_title' />
          </p>
          <p className='banner__container-content-subtext'>
            <FormattedMessage id='banner_subtitle' />
          </p>
        </div>
        <div className='banner__container-search'>
          <i className='fas fa-search banner__container-search-icon' />
          <input
            type='text'
            className='banner__container-search-input'
            placeholder='Enter to search'
          />
        </div>
        <div className='banner__container-connect'>
          <div className='banner__container-connect-google'>
            <img src={logoGG} alt='' />
          </div>
          <div className='banner__container-connect-appstore'>
            <img src={logoApp} alt='' />
          </div>
        </div>
        <div className='banner__container-box'>
          <ul className='banner__container-selection'>
            <li className='banner__container-selection__item'>
              <img src={chuyenkhoa} alt='' />
              <p>
                <FormattedMessage id='banner_select1' />
              </p>
            </li>
            <li className='banner__container-selection__item'>
              <img src={tuxa} alt='' />
              <p>
                <FormattedMessage id='banner_select2' />
              </p>
            </li>
            <li className='banner__container-selection__item'>
              <img src={tongquat} alt='' />
              <p>
                <FormattedMessage id='banner_select3' />
              </p>
            </li>
            <li className='banner__container-selection__item'>
              <img src={xetnghiem} alt='' />
              <p>
                <FormattedMessage id='banner_select4' />
              </p>
            </li>
            <li className='banner__container-selection__item'>
              <img src={suckhoe} alt='' />
              <p>
                <FormattedMessage id='banner_select5' />
              </p>
            </li>
            <li className='banner__container-selection__item'>
              <img src={nhakhoa} alt='' />
              <p>
                <FormattedMessage id='banner_select6' />
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

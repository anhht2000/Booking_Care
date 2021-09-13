import React, { ReactElement } from "react";
import { FormattedMessage } from "react-intl";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { actionSetlanguage, getLanguage, Language } from "../../initialApp/appSlice";
import "../asset/css/header.scss";
import logo from "../asset/image/logo.svg";

interface HeaderProps {}

export default function Header({}: HeaderProps): ReactElement {
  const dispatch = useAppDispatch();
  const language = useAppSelector(getLanguage);
  const handleChangeLanguage = (value: Language) => {
    dispatch(actionSetlanguage(value));
  };

  return (
    <header className='header'>
      <div className='header__left'>
        <div className='header__left-icon'>
          <i className='fas fa-bars'></i>
        </div>
        <div className='header__left-logo'>
          <img src={logo} alt='' />
        </div>
      </div>
      <div className='header__center'>
        <ul className='header__center-nav'>
          <li className='header__center-nav__item'>
            <p className='header__center-nav__item-title'>
              <FormattedMessage id='homeHeader_specialty' />
            </p>
            <p className='header__center-nav__item-subtitle'>
              <FormattedMessage id='homeHeader_searchDoctor' />
            </p>
          </li>
          <li className='header__center-nav__item'>
            <p className='header__center-nav__item-title'>
              <FormattedMessage id='homeHeader_healthFacility' />
            </p>
            <p className='header__center-nav__item-subtitle'>
              <FormattedMessage id='homeHeader_selectRoom' />
            </p>
          </li>
          <li className='header__center-nav__item'>
            <p className='header__center-nav__item-title'>
              <FormattedMessage id='homeHeader_Doctor' />
            </p>
            <p className='header__center-nav__item-subtitle'>
              <FormattedMessage id='homeHeader_selectDoctor' />
            </p>
          </li>
          <li className='header__center-nav__item'>
            <p className='header__center-nav__item-title'>
              <FormattedMessage id='homeHeader_fee' />
            </p>
            <p className='header__center-nav__item-subtitle'>
              <FormattedMessage id='homeHeader_checkHealth' />
            </p>
          </li>
        </ul>
      </div>
      <div className='header__right'>
        <div className='header__right-icon'>
          <i className='fas fa-question-circle'></i>
        </div>
        <p className='header__right-text'>
          <FormattedMessage id='homeHeader_support' />
        </p>
        <div className='header__right-language'>
          <p
            className={
              language === "vi" ? "header__right-language-VI active" : "header__right-language-VI"
            }
            onClick={() => {
              handleChangeLanguage("vi");
            }}
          >
            VI
          </p>
          <p
            className={
              language === "en" ? "header__right-language-EN active" : "header__right-language-EN"
            }
            onClick={() => {
              handleChangeLanguage("en");
            }}
          >
            EN
          </p>
        </div>
      </div>
    </header>
  );
}

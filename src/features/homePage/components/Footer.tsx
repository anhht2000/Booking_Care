import React, { ReactElement } from "react";
import "../asset/css/index.scss";

interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <p>
          &copy; Design by TuanAnhHoang.More infomation,please contact me by email{" "}
          <a href='/'>tuananhcx2000@gmail.com</a>
        </p>
      </div>
    </footer>
  );
}

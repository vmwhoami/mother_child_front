import React from 'react';
import css from '../../css/nav.module.css';
import {
  Gplus, Pinterest, Twitter, FaceBook,
} from './Svgs';

const Footer = () => (
  <div className={css.footer}>
    <div className={css.social}>
      <a href="https://twitter.com/" target="blank">
        {' '}
        <Twitter style={css.svg} />
      </a>
      <a href="https://www.facebook.com/" target="blank">
        <FaceBook style={css.svg} />
      </a>
      <a href="https://myaccount.google.com/" target="blank">
        <Gplus style={css.svg} />
      </a>
      <a href="https://www.pinterest.com/" target="blank">
        <Pinterest style={css.svg} />
      </a>

    </div>

    <span className={css.allrights}>
      <a href="https://www.vitalimelnic.tech">
        &copy;
        {` ${(new Date()).getFullYear()}  by Vitalie Melnic.`}
      </a>
    </span>

  </div>
);

export default Footer;

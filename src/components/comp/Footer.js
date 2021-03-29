import React from 'react';
import css from '../../css/nav.module.css';
import {
  Gplus, Pinterest, Twitter, FaceBook,
} from './Svgs';

const Footer = () => (
  <div className={css.footer}>
    <div className={css.social}>
      <Twitter style={css.svg} />
      <FaceBook style={css.svg} />
      <Gplus style={css.svg} />
      <Pinterest style={css.svg} />
    </div>

    <span className={css.allrights}>
      &copy;
      {` ${(new Date()).getFullYear()} All rights reserved | site by Vitalie Melnic.`}
    </span>

  </div>
);

export default Footer;

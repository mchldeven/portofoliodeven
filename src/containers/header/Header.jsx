import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="beranda">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with PORTOFOLIO-DEVEN OpenAI</h1>
      <p>jangan pada lupa ngopi, kerja boleh,tipes jangan</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Email Anda" />
        <button type="button">Dapatkan Sekarang</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 orang telah banyak mengunjungi website ini broo </p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;

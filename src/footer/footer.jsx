import React from "react";

import './footer.scss';

const Footer = () => {
  return(
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="copyright">
            <p>
              2016-2019 ООО "Инженерная Диагностика". Все права защищены.
            </p>
          </div>
          <div className="contact">
            <div className="contact__items">
              <div className="contact__item">
                <p className="contact__title title-email">Пишите нам на email</p>
                <a className="contact__text" href="mailto:info@diagnistics.by">info@diagnistics.by</a>
              </div>
              <div className="contact__item">
                <p className="contact__title title-phone">Есть вопросы? Звоните!</p>
                <a className="contact__text" href="tel:+375294564545">+375 (29) 456-45-45</a>
              </div>
              <div className="contact__item">
                <p className="contact__title title-adress">Заходите в гости</p>
                <p className="contact__text">г. Минск, ул. Ленина, д.9, пом.3, оф.10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
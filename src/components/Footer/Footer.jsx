import "./Footer.scss";

export const Footer = () => {
  return (
    <footer id="contact" class="footer">
      <div class="container">
        <div class="footer__addressblock">
          <ul class="footer__addresses">
            <li class="footer__address">
              <svg class="footer__icon" width="40" height="40">
                <use href="./svg/icons.svg#footer-map"></use>
              </svg>
              <div class="footer__text">
                <h3 class="footer__label">Адреса:</h3>
                <a
                  target="_blank"
                  href="https://www.google.com.ua/maps/search/%D0%BC.%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82+%D0%92%D1%96%D0%B4%D1%80%D0%BE%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F,+121/@49.8327706,23.9298347,17114m/data=!3m2!1e3!4b1?hl=uk&entry=ttu"
                  class="footer__contact"
                >
                  м.Львів, проспект Відродження, 121
                </a>
              </div>
            </li>
            <li class="footer__address">
              <svg class="footer__icon" width="40" height="40">
                <use href="./svg/icons.svg#footer-mail"></use>
              </svg>
              <div class="footer__text">
                <h3 class="footer__label">Email:</h3>
                <a href="mailto:evidence.ua@gmail.com" class="footer__contact">
                  evidence.ua@gmail.com
                </a>
              </div>
            </li>
            <li class="footer__address">
              <svg class="footer__icon" width="40" height="40">
                <use href="./svg/icons.svg#footer-call"></use>
              </svg>
              <div class="footer__text">
                <h3 class="footer__label">Телефон:</h3>
                <a href="tel:(800)0000000" class="footer__contact">
                  (800) 000 00 00
                </a>
              </div>
            </li>
          </ul>
          <ul class="footer__medias">
            <li class="footer__media">
              <a
                aria-label="instagram"
                target="_blank"
                href="https://www.instagram.com/"
                class="footer__run"
              >
                <svg class="footer__program" width="40" height="40">
                  <use href="./svg/icons.svg#footer-instagram"></use>
                </svg>
              </a>
            </li>
            <li class="footer__media">
              <a
                aria-label="facebook"
                target="_blank"
                href="https://sr-rs.facebook.com/"
                class="footer__run"
              >
                <svg class="footer__program" width="40" height="40">
                  <use href="./svg/icons.svg#footer-facebook"></use>
                </svg>
              </a>
            </li>
            <li class="footer__media">
              <a
                aria-label="google"
                target="_blank"
                href="https://www.google.co.uk/"
                class="footer__run"
              >
                <svg class="footer__program" width="40" height="40">
                  <use href="./svg/icons.svg#footer-google"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__content">
          <div class="footer__img">
            <picture>
              <source
                srcset="
                ./img/desktop/header/logo@1x-desktop.webp 1x,
                ./img/desktop/header/logo@2x-desktop.webp 2x
              "
                media="(min-width: 1766px)"
              />
              <source
                srcset="
                ./img/tablet/header/logo@1x-tablet.webp 1x,
                ./img/tablet/header/logo@1x-tablet.webp 2x
              "
                media="(max-width: 1765px)"
              />
              <img
                class="footer__logo"
                width="170"
                height="50"
                src="./img/tablet/header/logo@1x-tablet.webp 1x"
                alt="logo"
              />
            </picture>
          </div>
          <div class="footer__clinic">
            <h3 class="footer__header">Наша клініка</h3>
            <ul class="footer__advans">
              <li class="footer__advan">
                більше 10 років турбуємось про Ваше здоров'я
              </li>
              <li class="footer__advan">клініка для дітей</li>
              <li class="footer__advan">найбільший медичний центр в області</li>
              <li class="footer__advan">широкий спектр послуг</li>
              <li class="footer__advan">всі види щеплень</li>
            </ul>
          </div>
          <ul class="footer__lists">
            <li class="footer__items">
              <h3 class="footer__subtitle">Навігація</h3>
              <ul class="footer__list">
                <li class="footer__item">
                  <a href="./index.html" class="footer__link">
                    Головна
                  </a>
                </li>
                <li class="footer__item">
                  <a href="./index.html#about" class="footer__link">
                    Про клініку
                  </a>
                </li>
                <li class="footer__item">
                  <a href="./doctors-page.html" class="footer__link">
                    Лікарі
                  </a>
                </li>
                <li class="footer__item">
                  <a href="./index.html#cost" class="footer__link">
                    Послуги
                  </a>
                </li>
                <li class="footer__item">
                  <a href="./index.html#questions" class="footer__link">
                    FAQ
                  </a>
                </li>
                <li class="footer__item">
                  <a href="./index.html#reviews" class="footer__link">
                    Відгуки
                  </a>
                </li>
              </ul>
            </li>
            <li class="footer__items">
              <h3 class="footer__subtitle">Наші послуги</h3>
              <ul class="footer__list">
                <li class="footer__item">
                  <a href="#" class="footer__link">
                    Педіатрія
                  </a>
                </li>
                <li class="footer__item">
                  <a href="#" class="footer__link">
                    Щеплення
                  </a>
                </li>
                <li class="footer__item">
                  <a href="#" class="footer__link">
                    Діагностика
                  </a>
                </li>
                <li class="footer__item">
                  <a href="#" class="footer__link">
                    Вузькі спеціалісти
                  </a>
                </li>
                <li class="footer__item">
                  <a href="#" class="footer__link">
                    Стоматологія
                  </a>
                </li>
                <li class="footer__item">
                  <a href="#" class="footer__link">
                    Лабораторія
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

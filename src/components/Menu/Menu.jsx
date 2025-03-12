import "./Menu.scss";

export const Menu = () => {
  return (
    <div data-menu class="backdrop is-hidden">
      <div class="menu">
        <div class="menu__container">
          <div class="menu__main">
            <div class="menu__header">
              <button data-menu-close class="menu__close">
                <svg class="menu__icon" width="24" height="24">
                  <use href="./svg/icons.svg#close-square"></use>
                </svg>
              </button>
              <a href="./index.html" class="menu__logo">
                <picture>
                  <source
                    srcset="
                  ./img/desktop/header/logo@1x-desktop.webp 1x,
                  ./img/desktop/header/logo@2x-desktop.webp 2x
                "
                    media="(min-width: 1766px)"
                  />
                  <source
                    srcset="./img/tablet/header/logo@1x-tablet.webp 1x, header"
                    media="(min-width: 1334px)"
                  />
                  <source
                    srcset="
                  ./img/mobile/header/logo@1x-mobile.webp 1x,
                  ./img/mobile/header/logo@2x-mobile.webp 2x
                "
                    media="(max-width: 1333px)"
                  />
                  <img
                    class="menu__photo"
                    alt=""
                    src="./img/mobile/header/logo@1x-mobile.webp 1x"
                  />
                </picture>
              </a>
              <button class="menu__search">
                <svg class="menu__icon" width="24" height="24">
                  <use href="./svg/icons.svg#search"></use>
                </svg>
              </button>
            </div>
            <ul class="menu__settings">
              <li class="menu__setting">
                <svg class="menu__icon" width="24" height="24">
                  <use href="./svg/icons.svg#header-user"></use>
                </svg>
                <p class="menu__desc">Увійти</p>
              </li>
              <li class="menu__setting">
                <svg class="menu__icon" width="24" height="24">
                  <use href="./svg/icons.svg#global"></use>
                </svg>
                <p class="menu__desc">
                  Укр / <span class="menu__desc--disabled">Eng</span>
                </p>
              </li>
            </ul>
            <ul class="menu__list">
              <li class="menu__item">
                <a href="./index.html#about" class="menu__link">
                  Про нас
                </a>
              </li>
              <li class="menu__item">
                <a href="./index.html#cost" class="menu__link">
                  Вартість
                </a>
              </li>
              <li class="menu__item">
                <a href="./doctors-page.html" class="menu__link">
                  Лікарі
                </a>
              </li>
              <li class="menu__item">
                <a href="./index.html#questions" class="menu__link">
                  Запитання
                </a>
              </li>
              <li class="menu__item">
                <a href="./index.html#reviews" class="menu__link">
                  Відгуки
                </a>
              </li>
              <li class="menu__item">
                <a href="./index.html#contact" class="menu__link">
                  Контакти
                </a>
              </li>
            </ul>
          </div>
          <div class="menu__footer">
            <ul class="menu__adresses">
              <li class="menu__adress">
                <svg class="menu__contact" width="40" height="40">
                  <use href="./svg/icons.svg#footer-map"></use>
                </svg>
                <div class="menu__text">
                  <p class="menu__subtitle">Адреса:</p>
                  <a href="" class="menu__info">
                    м.Львів, проспект Відродження, 121
                  </a>
                </div>
              </li>
              <li class="menu__adress">
                <svg class="menu__contact" width="40" height="40">
                  <use href="./svg/icons.svg#footer-mail"></use>
                </svg>
                <div class="menu__text">
                  <p class="menu__subtitle">Email:</p>
                  <pa href="" class="menu__info">
                    evidence.ua@gmail.com
                  </pa>
                </div>
              </li>
              <li class="menu__adress">
                <svg class="menu__contact" width="40" height="40">
                  <use href="./svg/icons.svg#footer-call"></use>
                </svg>
                <div class="menu__text">
                  <p class="menu__subtitle">Телефон:</p>
                  <a href="" class="menu__info">
                    (800) 000 00 00
                  </a>
                </div>
              </li>
            </ul>
            <ul class="menu__socials">
              <li class="menu__social">
                <svg class="menu__contact" width="40" height="40">
                  <use href="./svg/icons.svg#footer-instagram"></use>
                </svg>
              </li>
              <li class="menu__social">
                <svg class="menu__contact" width="40" height="40">
                  <use href="./svg/icons.svg#footer-facebook"></use>
                </svg>
              </li>
              <li class="menu__social">
                <svg class="menu__contact" width="40" height="40">
                  <use href="./svg/icons.svg#footer-google"></use>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

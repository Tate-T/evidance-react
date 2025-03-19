import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <header class="header">
      <div class="container">
        <button aria-label="menu-burger" data-menu-open class="header__btn">
          <svg class="header__menu" width="24" height="24">
            <use href="./svg/icons.svg#burger-menu"></use>
          </svg>
        </button>
        <Link to="/" class="header__logo">
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
            ./img/tablet/header/logo@2x-tablet.webp 2x
          "
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
              class="header__img"
              width="186"
              height="48"
              src="./img/mobile/header/logo@1x-mobile.webp 1x"
              alt="logo"
            />
          </picture>
        </Link>
        <button aria-label="search" class="header__btn">
          <svg class="header__search" width="24" height="24">
            <use href="./svg/icons.svg#search"></use>
          </svg>
        </button>
        <ul class="header__list">
          <li class="header__item">
            <Link to="./index.html#about" class="header__link">
              Про нас
            </Link>
          </li>
          <li class="header__item">
            <Link to="/doctors" class="header__link">
              Лікарі
            </Link>
          </li>
          <li class="header__item">
            <Link to="/services" class="header__link">
              Вартість
            </Link>
          </li>
          <li class="header__item">
            <Link to="/faq" class="header__link">
              Запитання
            </Link>
          </li>
          <li class="header__item">
            <Link to="/reviews" class="header__link">
              Відгуки
            </Link>
          </li>
          <li class="header__item">
            <Link to="/contact" class="header__link">
              Контакти
            </Link>
          </li>
        </ul>
        <div class="header__wrapper">
          <svg class="header__user" width="28" height="28">
            <use href="./svg/icons.svg#header-user"></use>
          </svg>
        </div>
        <ul class="header__states">
          <li class="header__state">
            <a target="_blank" href="./enter-page.html" class="header__run">
              Пацієнт
            </a>
          </li>
          <li target="_blank" class="header__state">
            <a target="_blank" href="./enterD-page.html" class="header__run">
              Лікар
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

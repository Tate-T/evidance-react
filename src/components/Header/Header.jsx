import { Link } from "react-router-dom";
import "./Header.scss";

import logo from "./img/logo@1x-desktop.webp";

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
            <source srcset={logo} media="(min-width: 1766px)" />
            <source srcset={logo} media="(min-width: 1334px)" />
            <source srcset={logo} media="(max-width: 1333px)" />
            <img
              class="header__img"
              width="186"
              height="48"
              src={logo}
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
            <Link to="/" class="header__link">
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
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.143"
              d="M27.453 29.333C27.453 24.173 22.32 20 16 20S4.547 24.173 4.547 29.333M15.999 16a6.67 6.67 0 0 0 4.714-11.381A6.668 6.668 0 1 0 15.999 16z"
            />
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

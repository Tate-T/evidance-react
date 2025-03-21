import "./Hero.scss";
import photo1 from "./img/hero-photo@1x-desktop.webp";

export const Hero = () => {
  return (
    <section class="hero">
      <div class="hero__line"></div>
      <div class="container">
        <h1 data-text="Evidence" class="hero__title">
          Evidence
        </h1>
        <p class="hero__text">
          Територія сучаної педіатрії - доказ нашої любові
        </p>
        <button type="button" data-regis-open class="hero__btn">
          Записатись на прийом
        </button>
        <ul class="hero__list">
          <li class="hero__item">
            <svg class="hero__icon" width="42" height="42">
              <use href="./svg/icons.svg#hero-icon-1"></use>
            </svg>
            <h3 class="hero__subtitle">З’єднаємо зараз</h3>
          </li>
          <li class="hero__item">
            <svg class="hero__icon" width="42" height="42">
              <use href="./svg/icons.svg#hero-icon-2"></use>
            </svg>
            <h3 class="hero__subtitle">Цілодобово</h3>
          </li>
          <li class="hero__item">
            <svg class="hero__icon" width="42" height="42">
              <use href="./svg/icons.svg#hero-icon-3"></use>
            </svg>
            <h3 class="hero__subtitle">Вартість 400 грн</h3>
          </li>
        </ul>
        <div class="hero__imgblock">
          <picture>
            <source srcset={photo1} media="(min-width: 1766px)" />
            <source srcset={photo1} media="(min-width: 1334px)" />
            <source srcset={photo1} media="(max-width: 1333px)" />
            <img
              fetchpriority="high"
              class="hero__img"
              width="240"
              height="240"
              src={photo1}
              alt="A mom with a baby"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

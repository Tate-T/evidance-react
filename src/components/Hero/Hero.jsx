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
              <path
                stroke-miterlimit="10"
                stroke-width="1.143"
                d="M29.674 24.44c0 .48-.107.973-.333 1.453s-.52.933-.907 1.36c-.653.72-1.373 1.24-2.187 1.573-.8.333-1.667.507-2.6.507-1.36 0-2.813-.32-4.347-.973s-3.067-1.533-4.587-2.64a38.32 38.32 0 0 1-4.373-3.733 37.89 37.89 0 0 1-3.72-4.36c-1.093-1.52-1.973-3.04-2.613-4.547-.64-1.52-.96-2.973-.96-4.36 0-.907.16-1.773.48-2.573.32-.813.827-1.56 1.533-2.227.853-.84 1.787-1.253 2.773-1.253.373 0 .747.08 1.08.24.347.16.653.4.893.747l3.093 4.36c.24.333.413.64.533.933.12.28.187.56.187.813 0 .32-.093.64-.28.947a4.52 4.52 0 0 1-.747.947l-1.013 1.053a.712.712 0 0 0-.213.533c0 .107.013.2.04.307.04.107.08.187.107.267.24.44.653 1.013 1.24 1.707.6.693 1.24 1.4 1.933 2.107.72.707 1.413 1.36 2.12 1.96.693.587 1.267.987 1.72 1.227.067.027.147.067.24.107a.92.92 0 0 0 .333.053c.227 0 .4-.08.547-.227l1.013-1c.333-.333.653-.587.96-.747.307-.187.613-.28.947-.28.253 0 .52.053.813.173s.6.293.933.52l4.413 3.133c.347.24.587.52.733.853.133.333.213.667.213 1.04z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.143"
                d="M25.048 12c0-.8-.627-2.027-1.56-3.027-.853-.92-1.987-1.64-3.107-1.64M29.714 12a9.326 9.326 0 0 0-9.333-9.333"
              />
            </svg>
            <h3 class="hero__subtitle">З’єднаємо зараз</h3>
          </li>
          <li class="hero__item">
            <svg class="hero__icon" width="42" height="42">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="1.143"
                d="M10.667 2.667v4m10.666-4v4M4.667 12.12h22.667m.666-.787v11.333c0 4-2 6.667-6.667 6.667H10.666c-4.667 0-6.667-2.667-6.667-6.667V11.333c0-4 2-6.667 6.667-6.667h10.667C26 4.666 28 7.333 28 11.333z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.524"
                d="M20.927 18.266h.012m-.012 4h.012m-4.946-4h.013m-.013 4h.013m-4.947-4h.013m-.013 4h.013"
              />
            </svg>
            <h3 class="hero__subtitle">Цілодобово</h3>
          </li>
          <li class="hero__item">
            <svg class="hero__icon" width="42" height="42">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.143"
                d="M24.053 18.067a2.678 2.678 0 0 0-.8 2.173c.12 1.44 1.44 2.493 2.88 2.493h2.533v1.587a5.024 5.024 0 0 1-5.013 5.013H8.346a5.024 5.024 0 0 1-5.013-5.013v-8.973a5.024 5.024 0 0 1 5.013-5.013h15.307a5.024 5.024 0 0 1 5.013 5.013v1.92h-2.693c-.747 0-1.427.293-1.92.8z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.143"
                d="M3.333 16.547v-6.093c0-1.587.973-3 2.453-3.56l10.587-4A2.529 2.529 0 0 1 19.51 4.09c.19.363.289.767.289 1.177v5.067M9.333 16h9.333m11.413 2.627v2.747a1.37 1.37 0 0 1-1.333 1.36h-2.613c-1.44 0-2.76-1.053-2.88-2.493-.08-.84.24-1.627.8-2.173a2.655 2.655 0 0 1 1.92-.8h2.773a1.369 1.369 0 0 1 1.333 1.36z"
              />
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

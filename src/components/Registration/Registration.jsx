export const Registration = () => {
  return (
    <div data-regis class="backdrop is-hidden">
      <div class="regis">
        <div class="regis__header">
          <a href="" class="regis__logo">
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
                class="regis__img"
                width="186"
                height="48"
                src="./img/mobile/header/logo@1x-mobile.webp 1x"
                alt="logo"
              />
            </picture>
          </a>
          <p class="regis__conect">З’єднуємо з лікарем...</p>
        </div>
        <form class="regis__form">
          <h2 class="regis__title">Допоможемо знайти лікаря</h2>
          <div class="regis__labels">
            <label class="regis__label">
              <input
                required
                placeholder="Як до вас звернутись?"
                type="text"
                class="regis__input"
              />
            </label>
            <label class="regis__label">
              <input
                required
                placeholder="+380(___) ___ -__-__"
                type="tel"
                class="regis__input"
              />
            </label>
          </div>
          <p class="regis__question">Як з вами краще зв’язатися?</p>
          <div class="regis__chooses">
            <label class="regis__choose">
              <input
                required
                type="radio"
                name="contact"
                value="viber"
                class="regis__radio"
              />
              <div class="regis__fake">
                <div class="regis__checked"></div>
              </div>
              Напишіть мені на Viber
            </label>
            <label class="regis__choose">
              <input
                required
                type="radio"
                name="contact"
                value="phone"
                class="regis__radio"
              />
              <div class="regis__fake">
                <div class="regis__checked"></div>
              </div>
              Подзвоніть мені
            </label>
          </div>
          <button
            type="submit"
            data-regis-submit
            data-thank-open
            class="regis__button"
          >
            Відправити
          </button>
        </form>

        <button data-regis-close class="regis__close">
          <svg class="regis__icon" width="24" height="24">
            <use href="./svg/icons.svg#close-square"></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

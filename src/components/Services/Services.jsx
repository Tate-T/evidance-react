import React from 'react';
import './Services.scss';

export const Services = () => {
    return (
        <section id="cost" class="services">

            <div class="container">
                <h2 class="services__title">Послуги та вартість</h2>

                <div class="services__wrapper">

                    <input type="radio" name="r" id="r1" checked />
                    <input type="radio" name="r" id="r2" />
                    <input type="radio" name="r" id="r3" />
                    <input type="radio" name="r" id="r4" />

                    <div class="services__item s1">
                        <svg class="services__icon" width="100" height="100">
                            <use href="./svg/icons.svg#services-icon-1"></use>
                        </svg>
                        <h3 class="services__subtitle">Педіатрія</h3>
                    </div>

                    <div class="services__item">
                        <svg class="services__icon" width="100" height="100">
                            <use href="./svg/icons.svg#services-icon-2"></use>
                        </svg>
                        <h3 class="services__subtitle">Вакцинація</h3>
                    </div>

                    <div class="services__item">
                        <svg class="services__icon" width="100" height="100">
                            <use href="./svg/icons.svg#services-icon-3"></use>
                        </svg>
                        <h3 class="services__subtitle">Ортопед</h3>
                    </div>

                    <div class="services__item">
                        <svg class="services__icon" width="100" height="100">
                            <use href="./svg/icons.svg#services-icon-4"></use>
                        </svg>
                        <h3 class="services__subtitle">Гастроентеролог</h3>
                    </div>

                    <div class="services__item">
                        <svg class="services__icon" width="100" height="100">
                            <use href="./svg/icons.svg#services-icon-5"></use>
                        </svg>
                        <h3 class="services__subtitle">Стоматолог</h3>
                    </div>

                    <div class="services__item">
                        <svg class="services__icon" width="100" height="100">
                            <use href="./svg/icons.svg#services-icon-6"></use>
                        </svg>
                        <h3 class="services__subtitle">Нефрролог</h3>
                    </div>

                    <div class="services__item">
                        <svg class="services__icon" width="100" height="100">
                            <use href="./svg/icons.svg#services-icon-7"></use>
                        </svg>
                        <h3 class="services__subtitle">Кардіолог</h3>
                    </div>

                    <div class="services__item">
                        <svg class="services__icon" width="100" height="100">
                            <use href="./svg/icons.svg#services-icon-8"></use>
                        </svg>
                        <h3 class="services__subtitle">Уролог</h3>
                    </div>

                    <div class="services__item">
                        <svg class="services__icon" width="100" height="100">
                            <use href="./svg/icons.svg#services-icon-9"></use>
                        </svg>
                        <h3 class="services__subtitle">Лабораторія</h3>
                    </div>

                    <div class="services__item">
                        <svg class="services__icon" width="100" height="100">
                            <use href="./svg/icons.svg#services-icon-10"></use>
                        </svg>
                        <h3 class="services__subtitle">Дивитись ще</h3>
                    </div>

                    <div class="services__dots">
                        <label class="services__dot" for="r1"></label>
                        <label class="services__dot" for="r2"></label>
                        <label class="services__dot" for="r3"></label>
                        <label class="services__dot" for="r4"></label>
                    </div>
                </div>
                <div class="services__lines"></div>
            </div>
        </section>
    );
};

export default Services;
import React from 'react';
import './Record.scss';

export const Record = () => {
    return (
        <div data-record class="backdrop is-hidden">
            <div class="record">
                <div class="record__way">
                    <svg class="record__arrow" width="42" height="42">
                        <use href="./svg/icons.svg#record-arrow"></use>
                    </svg>
                    <h2 class="record__title">Запис на прийом</h2>
                </div>
                <p class="record__name">Демчишин Ярослав Павлович</p>
                <p class="record__info">Лікар інфекціоніст</p>
                <ul class="record__list">
                    <li class="record__item">
                        <div class="record__wrapper">
                            <svg class="record__edit" width="24" height="24">
                                <use href="./svg/icons.svg#record-edit"></use>
                            </svg>
                            <p class="record__map">м.Львів, проспект Відродження, 121</p>
                        </div>
                    </li>
                    <li class="record__item">
                        <div class="record__wrapper">
                            <p class="record__num">2</p>
                            <p class="record__subtitle">Оберіть дату</p>
                        </div>
                        <div class="record__dates">
                            <p class="record__date">15.12.2022</p>
                            <p class="record__date">19.12.2022</p>
                        </div>
                        <div class="record__regulators">
                            <p class="record__regulator">Назад</p>
                            <p class="record__regulator">Далі</p>
                        </div>
                    </li>
                    <li class="record__item">
                        <div class="record__wrapper">
                            <p class="record__num">3</p>
                            <p class="record__subtitle record__subtitle--disabled">Оберіть час</p>
                        </div>
                    </li>
                    <li class="record__item">
                        <div class="record__wrapper">
                            <p class="record__num">4</p>
                            <p class="record__subtitle">Авторизація</p>
                        </div>
                        <form class="record__form" action="">
                            <label class="record__label" for="">
                                Персональний номер:
                                <input
                                    required
                                    placeholder="Ваш персональний номер"
                                    class="record__input"
                                    type="text"
                                />
                            </label>
                            <label class="record__label" for="">
                                Пароль :
                                <input
                                    required
                                    placeholder="*************"
                                    class="record__input"
                                    type="password"
                                />
                            </label>
                            <button type="submit" class="record__btn">Вхід</button>
                            <div class="record__registes">
                                <p class="record__regist">Забув пароль</p>
                                <p class="record__regist">Реєстрація</p>
                            </div>
                        </form>
                    </li>
                    <li class="record__item">
                        <div class="record__wrapper">
                            <p class="record__num">5</p>
                            <p class="record__subtitle record__subtitle--disabled">Підтвердити</p>
                        </div>
                    </li>
                </ul>
                <button data-record-close class="record__close">
                    <svg class="record__icon" width="24" height="24">
                        <use href="./svg/icons.svg#close-square"></use>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Record;
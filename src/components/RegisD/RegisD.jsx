import { Link } from "react-router-dom";
import "./RegisD.scss";
import logo from "./img/logo@1x-desktop.webp";

export const RegisD = () => {
  return (
    <section class="regisD">
      <div class="container">
        <div class="regisD__header">
          <a href="" class="regisD__logo">
            <picture>
              <source srcset={logo} media="(min-width: 1766px)" />
              <source srcset={logo} media="(min-width: 1334px)" />
              <source srcset={logo} media="(max-width: 1333px)" />
              <img
                class="regisD__img"
                width="186"
                height="48"
                src={logo}
                alt="logo"
              />
            </picture>
          </a>
        </div>
        <form class="regisD__form">
          <h2 class="regisD__titledesk">Реєстрація</h2>
          <h2 class="regisD__titletel">Особистий кабінет</h2>
          <ul class="regisD__navs">
            <li class="regisD__nav">
              <a href="./enterD-page.html" class="regisD__link">
                Вхід
              </a>
            </li>
            <li class="regisD__nav">
              <a
                href="./regisD-page.html"
                class="regisD__link regisD__link--checked"
              >
                Реєстрація
              </a>
            </li>
          </ul>
          <ul class="regisD__list">
            <li class="regisD__item">
              <label class="regisD__label">
                ПІБ
                <input required type="text" class="regisD__input" />
              </label>
            </li>
            <li class="regisD__item">
              <label class="regisD__label">
                Дата народження
                <ul class="regisD__dates">
                  <li class="regisD__date">
                    <svg class="regisD__arrow" width="16" height="16">
                      <use href="./svg/icons.svg#choose-arrow"></use>
                    </svg>
                    <select class="regisD__numbers">
                      <option class="regisD__number" value="1">
                        1
                      </option>
                      <option class="regisD__number" value="2">
                        2
                      </option>
                      <option class="regisD__number" value="3">
                        3
                      </option>
                      <option class="regisD__number" value="4">
                        4
                      </option>
                      <option class="regisD__number" value="5">
                        5
                      </option>
                      <option class="regisD__number" value="6">
                        6
                      </option>
                      <option class="regisD__number" value="7">
                        7
                      </option>
                      <option class="regisD__number" value="8">
                        8
                      </option>
                      <option class="regisD__number" value="9">
                        9
                      </option>
                      <option class="regisD__number" value="10">
                        10
                      </option>
                      <option class="regisD__number" value="11">
                        11
                      </option>
                      <option class="regisD__number" value="12">
                        12
                      </option>
                      <option class="regisD__number" value="13">
                        13
                      </option>
                      <option class="regisD__number" value="14">
                        14
                      </option>
                      <option class="regisD__number" value="15">
                        15
                      </option>
                      <option class="regisD__number" value="16">
                        16
                      </option>
                      <option class="regisD__number" value="17">
                        17
                      </option>
                      <option class="regisD__number" value="18">
                        18
                      </option>
                      <option class="regisD__number" value="19">
                        19
                      </option>
                      <option class="regisD__number" value="20">
                        20
                      </option>
                      <option class="regisD__number" value="21">
                        21
                      </option>
                      <option class="regisD__number" value="22">
                        22
                      </option>
                      <option class="regisD__number" value="23">
                        23
                      </option>
                      <option class="regisD__number" value="24">
                        24
                      </option>
                      <option class="regisD__number" value="25">
                        25
                      </option>
                      <option class="regisD__number" value="26">
                        26
                      </option>
                      <option class="regisD__number" value="27">
                        27
                      </option>
                      <option class="regisD__number" value="28">
                        28
                      </option>
                      <option class="regisD__number" value="29">
                        29
                      </option>
                      <option class="regisD__number" value="30">
                        30
                      </option>
                      <option class="regisD__number" value="31">
                        31
                      </option>
                    </select>
                  </li>
                  <li class="regisD__date">
                    <svg class="regisD__arrow" width="16" height="16">
                      <use href="./svg/icons.svg#choose-arrow"></use>
                    </svg>
                    <select class="regisD__numbers">
                      <option class="regisD__number" value="1">
                        1
                      </option>
                      <option class="regisD__number" value="2">
                        2
                      </option>
                      <option class="regisD__number" value="3">
                        3
                      </option>
                      <option class="regisD__number" value="4">
                        4
                      </option>
                      <option class="regisD__number" value="5">
                        5
                      </option>
                      <option class="regisD__number" value="6">
                        6
                      </option>
                      <option class="regisD__number" value="7">
                        7
                      </option>
                      <option class="regisD__number" value="8">
                        8
                      </option>
                      <option class="regisD__number" value="9">
                        9
                      </option>
                      <option class="regisD__number" value="10">
                        10
                      </option>
                      <option class="regisD__number" value="11">
                        11
                      </option>
                      <option class="regisD__number" value="12">
                        12
                      </option>
                    </select>
                  </li>
                  <li class="regisD__date">
                    <svg class="regisD__arrow" width="16" height="16">
                      <use href="./svg/icons.svg#choose-arrow"></use>
                    </svg>
                    <select class="regisD__numbers">
                      <option class="regisD__number" value="1900">
                        1900
                      </option>
                      <option class="regisD__number" value="1901">
                        1901
                      </option>
                      <option class="regisD__number" value="1902">
                        1902
                      </option>
                      <option class="regisD__number" value="1903">
                        1903
                      </option>
                      <option class="regisD__number" value="1904">
                        1904
                      </option>
                      <option class="regisD__number" value="1905">
                        1905
                      </option>
                      <option class="regisD__number" value="1906">
                        1906
                      </option>
                      <option class="regisD__number" value="1907">
                        1907
                      </option>
                      <option class="regisD__number" value="1908">
                        1908
                      </option>
                      <option class="regisD__number" value="1909">
                        1909
                      </option>
                      <option class="regisD__number" value="1910">
                        1910
                      </option>
                      <option class="regisD__number" value="1911">
                        1911
                      </option>
                      <option class="regisD__number" value="1912">
                        1912
                      </option>
                      <option class="regisD__number" value="1913">
                        1913
                      </option>
                      <option class="regisD__number" value="1914">
                        1914
                      </option>
                      <option class="regisD__number" value="1915">
                        1915
                      </option>
                      <option class="regisD__number" value="1916">
                        1916
                      </option>
                      <option class="regisD__number" value="1917">
                        1917
                      </option>
                      <option class="regisD__number" value="1918">
                        1918
                      </option>
                      <option class="regisD__number" value="1919">
                        1919
                      </option>
                      <option class="regisD__number" value="1920">
                        1920
                      </option>
                      <option class="regisD__number" value="1921">
                        1921
                      </option>
                      <option class="regisD__number" value="1922">
                        1922
                      </option>
                      <option class="regisD__number" value="1923">
                        1923
                      </option>
                      <option class="regisD__number" value="1924">
                        1924
                      </option>
                      <option class="regisD__number" value="1925">
                        1925
                      </option>
                      <option class="regisD__number" value="1926">
                        1926
                      </option>
                      <option class="regisD__number" value="1927">
                        1927
                      </option>
                      <option class="regisD__number" value="1928">
                        1928
                      </option>
                      <option class="regisD__number" value="1929">
                        1929
                      </option>
                      <option class="regisD__number" value="1930">
                        1930
                      </option>
                      <option class="regisD__number" value="1931">
                        1931
                      </option>
                      <option class="regisD__number" value="1932">
                        1932
                      </option>
                      <option class="regisD__number" value="1933">
                        1933
                      </option>
                      <option class="regisD__number" value="1934">
                        1934
                      </option>
                      <option class="regisD__number" value="1935">
                        1935
                      </option>
                      <option class="regisD__number" value="1936">
                        1936
                      </option>
                      <option class="regisD__number" value="1937">
                        1937
                      </option>
                      <option class="regisD__number" value="1938">
                        1938
                      </option>
                      <option class="regisD__number" value="1939">
                        1939
                      </option>
                      <option class="regisD__number" value="1940">
                        1940
                      </option>
                      <option class="regisD__number" value="1941">
                        1941
                      </option>
                      <option class="regisD__number" value="1942">
                        1942
                      </option>
                      <option class="regisD__number" value="1943">
                        1943
                      </option>
                      <option class="regisD__number" value="1944">
                        1944
                      </option>
                      <option class="regisD__number" value="1945">
                        1945
                      </option>
                      <option class="regisD__number" value="1946">
                        1946
                      </option>
                      <option class="regisD__number" value="1947">
                        1947
                      </option>
                      <option class="regisD__number" value="1948">
                        1948
                      </option>
                      <option class="regisD__number" value="1949">
                        1949
                      </option>
                      <option class="regisD__number" value="1950">
                        1950
                      </option>
                      <option class="regisD__number" value="1951">
                        1951
                      </option>
                      <option class="regisD__number" value="1952">
                        1952
                      </option>
                      <option class="regisD__number" value="1953">
                        1953
                      </option>
                      <option class="regisD__number" value="1954">
                        1954
                      </option>
                      <option class="regisD__number" value="1955">
                        1955
                      </option>
                      <option class="regisD__number" value="1956">
                        1956
                      </option>
                      <option class="regisD__number" value="1957">
                        1957
                      </option>
                      <option class="regisD__number" value="1958">
                        1958
                      </option>
                      <option class="regisD__number" value="1959">
                        1959
                      </option>
                      <option class="regisD__number" value="1960">
                        1960
                      </option>
                      <option class="regisD__number" value="1961">
                        1961
                      </option>
                      <option class="regisD__number" value="1962">
                        1962
                      </option>
                      <option class="regisD__number" value="1963">
                        1963
                      </option>
                      <option class="regisD__number" value="1964">
                        1964
                      </option>
                      <option class="regisD__number" value="1965">
                        1965
                      </option>
                      <option class="regisD__number" value="1966">
                        1966
                      </option>
                      <option class="regisD__number" value="1967">
                        1967
                      </option>
                      <option class="regisD__number" value="1968">
                        1968
                      </option>
                      <option class="regisD__number" value="1969">
                        1969
                      </option>
                      <option class="regisD__number" value="1970">
                        1970
                      </option>
                      <option class="regisD__number" value="1971">
                        1971
                      </option>
                      <option class="regisD__number" value="1972">
                        1972
                      </option>
                      <option class="regisD__number" value="1973">
                        1973
                      </option>
                      <option class="regisD__number" value="1974">
                        1974
                      </option>
                      <option class="regisD__number" value="1975">
                        1975
                      </option>
                      <option class="regisD__number" value="1976">
                        1976
                      </option>
                      <option class="regisD__number" value="1977">
                        1977
                      </option>
                      <option class="regisD__number" value="1978">
                        1978
                      </option>
                      <option class="regisD__number" value="1979">
                        1979
                      </option>
                      <option class="regisD__number" value="1980">
                        1980
                      </option>
                      <option class="regisD__number" value="1981">
                        1981
                      </option>
                      <option class="regisD__number" value="1982">
                        1982
                      </option>
                      <option class="regisD__number" value="1983">
                        1983
                      </option>
                      <option class="regisD__number" value="1984">
                        1984
                      </option>
                      <option class="regisD__number" value="1985">
                        1985
                      </option>
                      <option class="regisD__number" value="1986">
                        1986
                      </option>
                      <option class="regisD__number" value="1987">
                        1987
                      </option>
                      <option class="regisD__number" value="1988">
                        1988
                      </option>
                      <option class="regisD__number" value="1989">
                        1989
                      </option>
                      <option class="regisD__number" value="1990">
                        1990
                      </option>
                      <option class="regisD__number" value="1991">
                        1991
                      </option>
                      <option class="regisD__number" value="1992">
                        1992
                      </option>
                      <option class="regisD__number" value="1993">
                        1993
                      </option>
                      <option class="regisD__number" value="1994">
                        1994
                      </option>
                      <option class="regisD__number" value="1995">
                        1995
                      </option>
                      <option class="regisD__number" value="1996">
                        1996
                      </option>
                      <option class="regisD__number" value="1997">
                        1997
                      </option>
                      <option class="regisD__number" value="1998">
                        1998
                      </option>
                      <option class="regisD__number" value="1999">
                        1999
                      </option>
                      <option class="regisD__number" value="2000">
                        2000
                      </option>
                      <option class="regisD__number" value="2001">
                        2001
                      </option>
                      <option class="regisD__number" value="2002">
                        2002
                      </option>
                      <option class="regisD__number" value="2003">
                        2003
                      </option>
                      <option class="regisD__number" value="2004">
                        2004
                      </option>
                      <option class="regisD__number" value="2005">
                        2005
                      </option>
                      <option class="regisD__number" value="2006">
                        2006
                      </option>
                      <option class="regisD__number" value="2007">
                        2007
                      </option>
                      <option class="regisD__number" value="2008">
                        2008
                      </option>
                      <option class="regisD__number" value="2009">
                        2009
                      </option>
                      <option class="regisD__number" value="2010">
                        2010
                      </option>
                      <option class="regisD__number" value="2011">
                        2011
                      </option>
                      <option class="regisD__number" value="2012">
                        2012
                      </option>
                      <option class="regisD__number" value="2013">
                        2013
                      </option>
                      <option class="regisD__number" value="2014">
                        2014
                      </option>
                      <option class="regisD__number" value="2015">
                        2015
                      </option>
                      <option class="regisD__number" value="2016">
                        2016
                      </option>
                      <option class="regisD__number" value="2017">
                        2017
                      </option>
                      <option class="regisD__number" value="2018">
                        2018
                      </option>
                      <option class="regisD__number" value="2018">
                        2019
                      </option>
                      <option class="regisD__number" value="2020">
                        2020
                      </option>
                      <option class="regisD__number" value="2021">
                        2021
                      </option>
                      <option class="regisD__number" value="2022">
                        2022
                      </option>
                      <option class="regisD__number" value="2023">
                        2023
                      </option>
                      <option class="regisD__number" value="2024">
                        2024
                      </option>
                    </select>
                  </li>
                </ul>
              </label>
            </li>
            <li class="regisD__item">
              <label class="regisD__label">
                Стать
                <svg
                  class="regisD__arrow regisD__arrow--gender"
                  width="16"
                  height="16"
                >
                  <use href="./svg/icons.svg#choose-arrow"></use>
                </svg>
                <select class="regisD__options" id="gender" name="gender">
                  <option class="regisD__option" value="woman">
                    Жіноча
                  </option>
                  <option class="regisD__option" value="man">
                    Чоловіча
                  </option>
                </select>
              </label>
            </li>
            <li class="regisD__item">
              <label class="regisD__label">
                Телефон
                <input
                  placeholder="+380(___) ___ -__-__"
                  required
                  type="tel"
                  class="regisD__input"
                />
              </label>
            </li>
            <li class="regisD__item">
              <label class="regisD__label">
                Емейл
                <input
                  placeholder="kutova_olha@gmail.com"
                  required
                  type="email"
                  class="regisD__input"
                />
              </label>
            </li>
            <li class="regisD__item">
              <label class="regisD__label">
                Пароль
                <p class="regisD__info">
                  (Пароль повинен бути 8 симфолів довжиною.)
                </p>
                <input
                  required
                  type="password"
                  class="regisD__input"
                  placeholder="********"
                  title="Пароль повинен містити 8 символів, включаючи великі та малі латинські літери, цифри та спеціальні знаки !№%?"
                  pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!№%?])[A-Za-z\d!№%?]{8,}"
                />
              </label>
            </li>
            <li class="regisD__item">
              <label class="regisD__label">
                Підтвердження пароля
                <input
                  required
                  type="password"
                  class="regisD__input"
                  placeholder="********"
                  title="Пароль повинен містити 8 символів, включаючи великі та малі латинські літери, цифри та спеціальні знаки !№%?"
                  pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!№%?])[A-Za-z\d!№%?]{8,}"
                />
              </label>
            </li>
          </ul>
          <button type="submit" data-thank-open class="regisD__button">
            Зареєструватися
          </button>
          <Link to="/enterD" class="regisD__login">
            Вже зараєстровані?
            <span class="regisD__login--acent"> Увійти</span>
          </Link>
          <p class="regisD__text">Увійти через соцмережі</p>
          <ul class="regisD__signups">
            <li class="regisD__signup">
              <svg class="regisD__icon" width="42" height="42">
                <use href="./svg/icons.svg#modal-google"></use>
              </svg>
              <a href="https://www.google.co.uk/" class="regisD__desc">
                Sign up with Google
              </a>
            </li>
            <li class="regisD__signup">
              <svg class="regisD__icon" width="36" height="36">
                <use href="./svg/icons.svg#modal-facebook"></use>
              </svg>
              <a href="https://sr-rs.facebook.com/" class="regisD__desc">
                Sign up with Facebook
              </a>
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
};

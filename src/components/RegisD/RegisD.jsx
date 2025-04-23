import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../redux/authSlice";
import "./RegisD.scss";
import logo from "./img/logo@1x-desktop.webp";

export const RegisD = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 126 }, (_, i) => 1900 + i);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    birthDate: "",
    gender: "",
    numTel: "",
    email: "",
    password: "",
    confirmPassword: "",
    number: "",
  });

  useEffect(() => {
    const generateDoctorNumber = () => {
      const random = Math.floor(10000 + Math.random() * 90000);
      return `EV-0${random}`;
    };
    setForm((prev) => ({ ...prev, number: generateDoctorNumber() }));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDateChange = (type, value) => {
    const [year, month, day] = form.birthDate.split("-");
    const newDate = {
      year: year || "1900",
      month: month || "01",
      day: day || "01",
      [type]: value.toString().padStart(2, "0"),
    };
    setForm({
      ...form,
      birthDate: `${newDate.year}-${newDate.month}-${newDate.day}`,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Паролі не збігаються");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("fullName", form.fullName);
    localStorage.setItem("email", form.email);
    localStorage.setItem("birthDate", form.birthDate);
    localStorage.setItem("gender", form.gender);
    localStorage.setItem("number", form.number);
    localStorage.setItem("numTel", form.numTel);

    dispatch(register(form));
    navigate("/dashboard");
  };

  return (
    <section className="regisD">
      <div className="container">
        <div className="regisD__header">
          <a href="" className="regisD__logo">
            <picture>
              <source srcSet={logo} media="(min-width: 1766px)" />
              <source srcSet={logo} media="(min-width: 1334px)" />
              <source srcSet={logo} media="(max-width: 1333px)" />
              <img
                className="regisD__img"
                width="186"
                height="48"
                src={logo}
                alt="logo"
              />
            </picture>
          </a>
        </div>
        <form className="regisD__form" onSubmit={handleSubmit}>
          <h2 className="regisD__titledesk">Реєстрація</h2>
          <h2 className="regisD__titletel">Особистий кабінет</h2>
          <ul className="regisD__navs">
            <li className="regisD__nav">
              <a href="./enterD-page.html" className="regisD__link">
                Вхід
              </a>
            </li>
            <li className="regisD__nav">
              <a
                href="./regisD-page.html"
                className="regisD__link regisD__link--checked"
              >
                Реєстрація
              </a>
            </li>
          </ul>
          <ul className="regisD__list">
            <li className="regisD__item">
              <label className="regisD__label">
                ПІБ
                <input
                  required
                  type="text"
                  name="fullName"
                  className="regisD__input"
                  value={form.fullName}
                  onChange={handleChange}
                />
              </label>
            </li>
            <li className="regisD__item">
              <label className="regisD__label">
                Дата народження
                <ul className="regisD__dates">
                  <li className="regisD__date">
                    <select
                      className="regisD__numbers"
                      value={form.birthDate.split("-")[2] || ""}
                      onChange={(e) => handleDateChange("day", e.target.value)}
                    >
                      <option value="">День</option>
                      {days.map((day) => (
                        <option
                          value={day.toString().padStart(2, "0")}
                          key={day}
                        >
                          {day}
                        </option>
                      ))}
                    </select>
                  </li>
                  <li className="regisD__date">
                    <select
                      className="regisD__numbers"
                      value={form.birthDate.split("-")[1] || ""}
                      onChange={(e) =>
                        handleDateChange("month", e.target.value)
                      }
                    >
                      <option value="">Місяць</option>
                      {months.map((month) => (
                        <option
                          value={month.toString().padStart(2, "0")}
                          key={month}
                        >
                          {month}
                        </option>
                      ))}
                    </select>
                  </li>
                  <li className="regisD__date">
                    <select
                      className="regisD__numbers"
                      value={form.birthDate.split("-")[0] || ""}
                      onChange={(e) => handleDateChange("year", e.target.value)}
                    >
                      <option value="">Рік</option>
                      {years.map((year) => (
                        <option value={year} key={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </li>
                </ul>
              </label>
            </li>
            <li className="regisD__item">
              <label className="regisD__label">
                Стать
                <select
                  className="regisD__options"
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                >
                  <option value="woman">Жіноча</option>
                  <option value="man">Чоловіча</option>
                </select>
              </label>
            </li>
            <li className="regisD__item">
              <label className="regisD__label">
                Телефон
                <input
                  placeholder="+380(___) ___ -__-__"
                  required
                  type="tel"
                  name="numTel"
                  className="regisD__input"
                  value={form.numTel}
                  onChange={handleChange}
                />
              </label>
            </li>
            <li className="regisD__item">
              <label className="regisD__label">
                Емейл
                <input
                  placeholder="kutova_olha@gmail.com"
                  required
                  type="email"
                  name="email"
                  className="regisD__input"
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
            </li>
            <li className="regisD__item">
              <label className="regisD__label">
                Пароль
                <p className="regisD__info">
                  (Пароль повинен бути 8 симфолів довжиною.)
                </p>
                <input
                  required
                  type="password"
                  name="password"
                  className="regisD__input"
                  placeholder="********"
                  value={form.password}
                  onChange={handleChange}
                />
              </label>
            </li>
            <li className="regisD__item">
              <label className="regisD__label">
                Підтвердження пароля
                <input
                  required
                  type="password"
                  name="confirmPassword"
                  className="regisD__input"
                  placeholder="********"
                  value={form.confirmPassword}
                  onChange={handleChange}
                />
              </label>
            </li>
          </ul>
          <button type="submit" className="regisD__button">
            Зареєструватися
          </button>
          <Link to="/enterD" className="regisD__login">
            Вже зараєстровані?
            <span className="regisD__login--acent"> Увійти</span>
          </Link>
          <p className="regisD__text">Увійти через соцмережі</p>
          <ul className="regisD__signups">
            <li className="regisD__signup">
              <svg className="regisD__icon" width="42" height="42">
                <use href="./svg/icons.svg#modal-google"></use>
              </svg>
              <a href="https://www.google.co.uk/" className="regisD__desc">
                Sign up with Google
              </a>
            </li>
            <li className="regisD__signup">
              <svg className="regisD__icon" width="36" height="36">
                <use href="./svg/icons.svg#modal-facebook"></use>
              </svg>
              <a href="https://sr-rs.facebook.com/" className="regisD__desc">
                Sign up with Facebook
              </a>
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
};

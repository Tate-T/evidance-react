import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../redux/authSlice";
import "./EnterD.scss";
import logo from "./img/logo@1x-desktop.webp";

export const EnterD = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector((state) => state.auth.error);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const successMessage = sessionStorage.getItem("loginSuccess");
    if (successMessage) {
      toast.success(successMessage);
      sessionStorage.removeItem("loginSuccess");
    }
  }, []);

  useEffect(() => {
    if (user && !error) {
      sessionStorage.setItem(
        "loginSuccess",
        `Привіт, ${user.name}! Ви успішно авторизувалися`
      );
      navigate("/profile");
    }

    if (error) {
      toast.error(error);
    }
  }, [user, error, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ number, password }));
  };

  return (
    <section className="enterD">
      <div className="container">
        <a href="./index.html" className="enterD__logo">
          <picture>
            <source srcSet={logo} media="(min-width: 1766px)" />
            <source srcSet={logo} media="(min-width: 1334px)" />
            <source srcSet={logo} media="(max-width: 1333px)" />
            <img
              className="enterD__picture"
              width="186"
              height="48"
              src={logo}
              alt="logo"
            />
          </picture>
        </a>
        <form className="enterD__content" onSubmit={handleSubmit}>
          <h1 className="enterD__title">Вхід в особистий кабінет</h1>
          <h2 className="enterD__subtitle">Особистий кабінет</h2>
          <ul className="enterD__funkshes">
            <li className="enterD__funkshe">
              <a
                href="./enterD-page.html"
                className="enterD__run enterD__run--accent"
              >
                Вхід
              </a>
            </li>
            <li className="enterD__funkshe">
              <a href="./regisD-page.html" className="enterD__run">
                Реєстрація
              </a>
            </li>
          </ul>
          <ul className="enterD__list">
            <li className="enterD__item">
              <label className="enterD__label">
                Персональний номер лікаря
                <input
                  name="enterD-number"
                  type="text"
                  className="enterD__input"
                  placeholder="EV-0*****"
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </label>
            </li>
            <li className="enterD__item">
              <label className="enterD__label">
                Пароль
                <input
                  name="enterD-password"
                  type="password"
                  className="enterD__input"
                  placeholder="*********"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <svg className="enterD__eye" width="20" height="20">
                  <use href="./svg/icons.svg#eye-slash"></use>
                </svg>
              </label>
            </li>
          </ul>
          {error && <p className="enterD__error">{error}</p>}
          <button type="submit" className="enterD__btn">
            Вхід
          </button>
          <p className="enterD__forget">Забули пароль?</p>
          <div className="enterD__block">
            <p className="enterD__first"></p>
            <Link to="/regisD" className="enterD__registration">
              Вперше тут?
              <span className="enterD__registration enterD__registration--accent">
                Зареєеструватися
              </span>
            </Link>
          </div>
          <h4 className="enterD__header">Увійти через соцмережі</h4>
          <ul className="enterD__medias">
            <li className="enterD__media">
              <a
                target="_blank"
                href="https://www.google.com/search?q=google"
                className="enterD__address"
              >
                <svg className="enterD__icon" width="36" height="36">
                  <use href="./svg/icons.svg#modal-google"></use>
                </svg>
                <p className="enterD__sign">Sign up with Google</p>
              </a>
            </li>
            <li className="enterD__media">
              <a
                target="_blank"
                href="https://sr-rs.facebook.com/"
                className="enterD__address"
              >
                <svg className="enterD__icon" width="36" height="36">
                  <use href="./svg/icons.svg#modal-facebook"></use>
                </svg>
                <p className="enterD__sign">Sign up with Facebook</p>
              </a>
            </li>
          </ul>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </section>
  );
};

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../redux/modalSlice";
import "./Contact.scss";
import closeIcon from "./svg/icons.svg#close-square";

export const Contact = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  console.log(isOpen);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(toggleModal());
    }
  };

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isOpen);
  }, [isOpen]);

  if (!isOpen) return null;

  // useEffect(() => {
  // 	const refs = {
  // 		openModalBtn: document.querySelector('[data-contact-open]'),
  // 		closeModalBtn: document.querySelector('[data-contact-close]'),
  // 		modal: document.querySelector('[data-contact]'),
  // 		backdrop: document.querySelector('.backdrop'),
  // 	};

  // 	const toggleModal = e => {
  // 		if (e.currentTarget === refs.backdrop && e.target !== e.currentTarget)
  // 			return;
  // 		refs.modal.classList.toggle('is-hidden');
  // 		document.body.classList.toggle('no-scroll');
  // 	};

  // 	refs.openModalBtn?.addEventListener('click', toggleModal);
  // 	refs.closeModalBtn?.addEventListener('click', toggleModal);
  // 	refs.backdrop?.addEventListener('click', toggleModal);

  // 	return () => {
  // 		refs.openModalBtn?.removeEventListener('click', toggleModal);
  // 		refs.closeModalBtn?.removeEventListener('click', toggleModal);
  // 		refs.backdrop?.removeEventListener('click', toggleModal);
  // 	};
  // }, []);

  return (
    isOpen && (
      <div data-contact className="backdrop" onClick={handleBackdropClick}>
        <div className="contact">
          <form autocomplete="on" className="contact__form">
            <button
              type="button"
              data-contact-close
              className="contact__close"
              onClick={() => dispatch(toggleModal())}
            >
              <svg className="contact__icon" width="24" height="24">
                <use href={`${closeIcon}#close-square`} />
              </svg>
            </button>

            <h1 className="contact__title">
              Хочете, зателефонуємо Вам за 30 секунд?
            </h1>
            <input
              type="tel"
              name="user-tel"
              placeholder="Ваш номер телефону"
              className="contact__input"
              required
            />
            <button className="contact__btn">Зателефонуйте</button>
            <p className="contact__time">
              00:<span className="contact__minutes">29</span>:99
            </p>
          </form>
        </div>
      </div>
    )
  );
};

export default Contact;

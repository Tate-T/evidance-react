import React from 'react';
import './Contact.scss';
import { useEffect } from 'react';

export const Contact = () => {
	useEffect(() => {
		const refs = {
			openModalBtn: document.querySelector('[data-contact-open]'),
			closeModalBtn: document.querySelector('[data-contact-close]'),
			modal: document.querySelector('[data-contact]'),
			backdrop: document.querySelector('.backdrop'),
		};

		const toggleModal = e => {
			if (e.currentTarget === refs.backdrop && e.target !== e.currentTarget)
				return;
			refs.modal.classList.toggle('is-hidden');
			document.body.classList.toggle('no-scroll');
		};

		refs.openModalBtn?.addEventListener('click', toggleModal);
		refs.closeModalBtn?.addEventListener('click', toggleModal);
		refs.backdrop?.addEventListener('click', toggleModal);

		return () => {
			refs.openModalBtn?.removeEventListener('click', toggleModal);
			refs.closeModalBtn?.removeEventListener('click', toggleModal);
			refs.backdrop?.removeEventListener('click', toggleModal);
		};
	}, []);

	return (
		<div data-contact className='backdrop is-hidden'>
			<div className='contact'>
				<form autocomplete='on' className='contact__form'>
					<button data-contact-close className='contact__close'>
						<svg className='contact__icon' width='24' height='24'>
							<use href='./svg/icons.svg#close-square'></use>
						</svg>
					</button>
					<h1 className='contact__title'>
						Хочете, зателефонуємо Вам за 30 секунд?
					</h1>
					<input
						type='tel'
						name='user-tel'
						placeholder='Ваш номер телефону'
						className='contact__input'
						required
					/>
					<button className='contact__btn'>Зателефонуйте</button>
					<p className='contact__time'>
						00:<span className='contact__minutes'>29</span>:99
					</p>
				</form>
			</div>
		</div>
	);
};

export default Contact;

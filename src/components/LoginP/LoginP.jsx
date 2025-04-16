import React, { useState } from 'react';
import './LoginP.scss';
import logo from '../../img/desktop/header/logo@2x-desktop.webp';
import googleLogo from '../../img/icons/Google logo.svg';
import facebookLogo from '../../img/icons/facebook-3 logo.svg';
import backImg from '../../img/desktop/enter/enter-img@1x-desktop.webp';

export const LoginP = () => {
	const [formData, setFormData] = useState({
		phone: '',
		password: '',
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log('Form submitted:', formData);
	};

	return (
		<div className='login-container'>
			<img src={logo} alt='' className='login-logo' />
			<img src={backImg} alt='' className='login-backImg' />
			<div className='login-form'>
				<h2 className='login-title'>Вхід в особистий кабінет</h2>
				<form onSubmit={handleSubmit} className='form'>
					<div className='login-form-group'>
						<label htmlFor='phone' className='form-text'>
							Персональний номер
						</label>
						<input
							type='number'
							id='phone'
							name='phone'
							value={formData.phone}
							onChange={handleChange}
							required
						/>
					</div>

					<div className='login-form-group'>
						<label htmlFor='password' className='form-text'>
							Пароль
						</label>
						<input
							type='password'
							id='password'
							name='password'
							value={formData.password}
							onChange={handleChange}
							required
						/>
					</div>

					<button type='submit' className='submit-button'>
						Вхід
					</button>
				</form>

				<a href='#' className='login-resetPassword'>
					Забули пароль?
				</a>

				<div className='login-login'>
					<span>Вперше тут?</span>
					<a href='#'>Зареєструватися</a>
				</div>

				<div className='login-social'>
					<div className='login-with'>
						<img src={googleLogo} alt='' />
						<span>Sign up with Google </span>
					</div>
					<div className='login-with'>
						<img src={facebookLogo} alt='' />
						<span>Sign up with Facebook </span>
					</div>
				</div>
			</div>
		</div>
	);
};

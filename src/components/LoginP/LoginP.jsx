import React, { useState } from 'react';
import './LoginP.scss';
import logo from '../../img/desktop/header/logo@2x-desktop.webp';
import googleLogo from '../../img/icons/Google logo.svg';
import facebookLogo from '../../img/icons/facebook-3 logo.svg';
import backImg from '../../img/desktop/enter/enter-img@1x-desktop.webp';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const LoginP = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const auth = getAuth();

	const preventDef = e => {
		e.preventDefault();
		handleLogin(formData.email, formData.password);
	};

	const handleLogin = (email, password) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(console.log, navigate('/'))
			.catch(console.error);
	};

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<div className='login-container'>
			<img src={logo} alt='' className='login-logo' />
			<img src={backImg} alt='' className='login-backImg' />
			<div className='login-form'>
				<h2 className='login-title'>Вхід в особистий кабінет</h2>
				<form onSubmit={preventDef} className='form'>
					<div className='login-form-group'>
						<label htmlFor='email' className='form-text'>
							Емайл
						</label>
						<input
							type='email'
							id='email'
							name='email'
							value={formData.email}
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
					<Link to='/register'>Зареєструватися</Link>
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

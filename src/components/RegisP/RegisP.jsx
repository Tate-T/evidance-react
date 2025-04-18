import React, { useState } from 'react';
import './RegisP.scss';
import logo from '../../img/desktop/header/logo@2x-desktop.webp';
import googleLogo from '../../img/icons/Google logo.svg';
import facebookLogo from '../../img/icons/facebook-3 logo.svg';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const RegisP = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const auth = getAuth();

	const preventDef = e => {
		e.preventDefault();
		handleRegister(formData.email, formData.password);
	};

	const handleRegister = (email, password) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user);

				formData.id = user.uid;
				formData.token = user.accessToken;

				console.log(formData);

				dispatch(
					setUser({
						firstName: formData.firstName,
						lastname: formData.lastname,
						middleName: formData.middleName,
						birthMonth: formData.birthMonth,
						birthYear: formData.birthYear,
						birthDay: formData.birthDay,
						gender: formData.gender,
						password: formData.password,
						email: formData.email,
						id: formData.id,
						token: formData.token,
					})
				);
				console.log();
				navigate('/');
			})
			.catch(console.error);
	};

	const [formData, setFormData] = useState({
		lastName: '',
		firstName: '',
		middleName: '',
		birthMonth: '',
		birthDay: '',
		birthYear: '',
		gender: '',
		password: '',
		email: '',
		id: null,
		token: null,
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	const days = Array.from({ length: 31 }, (_, i) => i + 1);

	const currentYear = new Date().getFullYear();
	const years = Array.from(
		{ length: currentYear - 1900 + 1 },
		(_, i) => currentYear - i
	);

	return (
		<div className='registration-container'>
			<img src={logo} alt='' className='registration-logo' />
			<div className='registration-form'>
				<h2 className='registration-title'>Реєстрація</h2>
				<form onSubmit={preventDef} className='form'>
					<div className='registration-form-group'>
						<label htmlFor='lastName' className='form-text'>
							Прізвище
						</label>
						<input
							type='text'
							id='lastName'
							name='lastName'
							value={formData.lastName}
							onChange={handleChange}
							required
						/>
					</div>

					<div className='registration-form-group'>
						<label htmlFor='firstName' className='form-text'>
							Ім'я
						</label>
						<input
							type='text'
							id='firstName'
							name='firstName'
							value={formData.firstName}
							onChange={handleChange}
							required
						/>
					</div>

					<div className='registration-form-group'>
						<label htmlFor='middleName' className='form-text'>
							По-батькові
						</label>
						<input
							type='text'
							id='middleName'
							name='middleName'
							value={formData.middleName}
							onChange={handleChange}
							required
						/>
					</div>

					<div className='registration-form-group form-birth-date'>
						<label className='form-text'>Дата народження</label>

						<div className='birth-date-selects'>
							<select
								name='birthMonth'
								value={formData.birthMonth}
								onChange={handleChange}
								className='birth-date-month'
								required
							>
								<option value='' disabled>
									Місяць
								</option>
								<option value='01'>Січень</option>
								<option value='02'>Лютий</option>
								<option value='03'>Березень</option>
								<option value='04'>Квітень</option>
								<option value='05'>Травень</option>
								<option value='06'>Червень</option>
								<option value='07'>Липень</option>
								<option value='08'>Серпень</option>
								<option value='09'>Вересень</option>
								<option value='10'>Жовтень</option>
								<option value='11'>Листопад</option>
								<option value='12'>Грудень</option>
							</select>

							<div className='birth-date-inputs'>
								<select
									name='birthDay'
									value={formData.birthDay}
									onChange={handleChange}
									required
								>
									<option value='' disabled>
										Дата
									</option>
									{days.map(day => (
										<option key={day} value={day.toString().padStart(2, '0')}>
											{day}
										</option>
									))}
								</select>
								<select
									name='birthYear'
									value={formData.birthYear}
									onChange={handleChange}
									required
								>
									<option value='' disabled>
										Рік
									</option>
									{years.map(year => (
										<option key={year} value={year}>
											{year}
										</option>
									))}
								</select>
							</div>
						</div>
					</div>

					<div className='registration-form-group'>
						<label className='form-text'>Стать</label>
						<select
							className='form-select-gender'
							name='gender'
							value={formData.gender}
							onChange={handleChange}
							required
						>
							<option value='male'>Чоловіча</option>
							<option value='female'>Жіноча</option>
						</select>
					</div>

					<div className='registration-form-group'>
						<label htmlFor='password' className='form-text'>
							Пароль
						</label>
						<input
							type='pass'
							id='password'
							name='password'
							value={formData.password}
							onChange={handleChange}
							required
						/>
					</div>

					<div className='registration-form-group'>
						<label htmlFor='email' className='form-text'>
							Емейл
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

					<button type='submit' className='submit-button'>
						Зареєструватися
					</button>
				</form>

				<div className='registration-login'>
					<span>Вже зараєстровані?</span>
					<Link to='/login'>Увійти</Link>
				</div>

				<div className='registration-social'>
					<div className='registration-with'>
						<img src={googleLogo} alt='' />
						<span>Sign up with Google </span>
					</div>
					<div className='registration-with'>
						<img src={facebookLogo} alt='' />
						<span>Sign up with Facebook </span>
					</div>
				</div>
			</div>
		</div>
	);
};

import { Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux';
import './index.scss';
import { DoctorsPage } from './pages/DoctorsPage';
import { MainPage } from './pages/MainPage.jsx';
import { store } from './redux/store';
import { LoginPage } from './pages/loginPage';
import { RegisPage } from './pages/registerPage';

export const App = () => {
	return (
		<Provider store={store}>
			<Routes>
				{/* <Route path='/' element={<MainPage />} />
				<Route path='/doctors' element={<DoctorsPage />} /> */}
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisPage />} />
			</Routes>
		</Provider>
	);
};

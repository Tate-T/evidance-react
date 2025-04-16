import { Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux';
import './index.scss';
import { DoctorsPage } from './pages/DoctorsPage';
import { MainPage } from './pages/MainPage';
import { PatientPage } from './pages/PatientPage';
import { store } from './redux/store';

export const App = () => {
	return (
		<Provider store={store}>
			<Routes>
				{/* <Route path='/' element={<MainPage />} />
				<Route path='/doctors' element={<DoctorsPage />} /> */}
				<Route path='/patient' element={<PatientPage />} />
			</Routes>
		</Provider>
	);
};

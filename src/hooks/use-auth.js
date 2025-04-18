import { useSelector	} from "react-redux";

export function useAuth() {
	const {firstName, lastName, middleName, birthMonth, birthYear, birthDay, gender, phone, email} = useSelector(state => state.user);

	return (
		isAuth: !!email,
		email,
		phone,
	)
}
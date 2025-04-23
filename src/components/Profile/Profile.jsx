import { useEffect } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const fullName = localStorage.getItem("fullName");
  const email = localStorage.getItem("email");
  const birthDate = localStorage.getItem("birthDate");
  const gender = localStorage.getItem("gender");
  const number = localStorage.getItem("number");
  const numTel = localStorage.getItem("numTel");

  useEffect(() => {
    const loginSuccess = localStorage.getItem("loginSuccess");
    if (loginSuccess) {
      toast.success(`${loginSuccess}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      localStorage.removeItem("loginSuccess");
    }
  }, []);

  return (
    <div>
      <h1>Профіль</h1>

      <p>Ваше ім'я: {fullName}</p>
      <p>Ваша електронна пошта: {email}</p>
      <p>Ваша дата народження: {birthDate}</p>
      <p>Ваша стать: {gender}</p>
      <p>Ваш ідентифікаційний номер: {number}</p>
      <p>Ваш номер телефону: {numTel}</p>

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
    </div>
  );
};

export default Profile;

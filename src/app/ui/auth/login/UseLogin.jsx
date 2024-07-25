import { useNavigate } from "react-router-dom";
import { useForm } from "./userForm";

const UseLogin = () => {
  const navigate = useNavigate();

  const { email, password, onInputChange, onResetForm } = useForm({
    email: "",
    password: "",
  });

  const onLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard", {
      replace: true,
      state: {
        logged: true,
      },
    });

    onResetForm();
  };
  return {
    email,
    password,
    onInputChange,
    onLogin,
  };
};

export default UseLogin;

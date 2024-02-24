// import { useAuth } from "./useAuth";
import { useAuthStore } from "./authStore";

const LoginStatus = () => {
  // const { user, dispatch } = useAuth();
  const { user, login, logout } = useAuthStore();

  if (user)
    return (
      <a onClick={() => logout()} href="#">
        Logout
      </a>
      // <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
      //   Logout
      // </a>
    );

  return (
    <a onClick={() => login("Oleh Kliapko")} href="#">
      Login
    </a>
    // <a
    //   onClick={() => dispatch({ type: "LOGIN", username: "Oleh Kliapko" })}
    //   href="#"
    // >
    //   Login
    // </a>
  );
};

export default LoginStatus;

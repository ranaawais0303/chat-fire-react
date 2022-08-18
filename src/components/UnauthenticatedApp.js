import useAuth from "../hooks/useAuth";
import classes from "./UnauthenticatedApp.module.css";
const UnauthenticatedApp = () => {
  const { login } = useAuth();
  return (
    <>
      <h2>Log in to join a chat room!</h2>
      <div>
        <button onClick={login} className={classes.login}>
          Login with Google
        </button>
      </div>
    </>
  );
};

export default UnauthenticatedApp;

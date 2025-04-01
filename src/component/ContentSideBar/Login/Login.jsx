import InputCommon from "@component/InputCommon/InputCommon";
import Button from "@component/Button/Button";
import styles from "./Login.module.scss";

function Login() {
  const { container, title, boxRemember, lostPassword } = styles;
  return (
    <div className={container}>
      <div className={title}>SIGN IN</div>
      <InputCommon
        label={"Username or email"}
        type={"text"}
        isRequired={true}
      />
      <InputCommon label={"Password"} type={"password"} isRequired={true} />
      <div className={boxRemember}>
        <input type="checkbox" />
        <span>Remember me</span>
      </div>
      <Button content={"LOGIN"} />
      <div className={lostPassword}>Lost your password?</div>
    </div>
  );
}

export default Login;

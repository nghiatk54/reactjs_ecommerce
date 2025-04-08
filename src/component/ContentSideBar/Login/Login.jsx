import InputCommon from "@component/InputCommon/InputCommon";
import Button from "@component/Button/Button";
import styles from "./Login.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useContext } from "react";
import { ToastContext } from "@context/ToastProvider";
import { register, login } from "@api/authService";
import Cookies from "js-cookie";
import { SideBarContext } from "@context/SideBarProvider";
import { StoreContext } from "@context/StoreProdiver";
function Login() {
  const { container, title, boxRemember, lostPassword, boxToggleRegister } =
    styles;
  const { toast } = useContext(ToastContext);
  const { setIsOpen } = useContext(SideBarContext);
  const { setUserId } = useContext(StoreContext);
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: async (values) => {
      if (isLoading) return;

      const { email: username, password } = values;
      setIsLoading(true);

      if (isRegister) {
        await register({ username, password })
          .then((res) => {
            toast.success(res.data.message);
            setIsLoading(false);
            setIsRegister(false);
          })
          .catch((err) => {
            toast.error(err.response.data.message);
            setIsLoading(false);
          });
      }
      if (!isRegister) {
        await login({ username, password })
          .then((res) => {
            const { id, token, refreshToken } = res.data;
            setUserId(id);
            Cookies.set("token", token);
            Cookies.set("refreshToken", refreshToken);
            Cookies.set("userId", id);
            toast.success("Login successful");
            setIsLoading(false);
            setIsOpen(false);
          })
          .catch((err) => {
            toast.error(err.response.data.message);
            setIsLoading(false);
          });
      }
    },
  });
  const handleToggleRegister = () => {
    setIsRegister(!isRegister);
    formik.resetForm();
  };
  return (
    <div className={container}>
      <div className={title}>{isRegister ? "SIGN UP" : "SIGN IN"}</div>
      <form onSubmit={formik.handleSubmit}>
        <InputCommon
          label={"Username or email"}
          type={"text"}
          isRequired={true}
          id={"email"}
          formik={formik}
        />
        <InputCommon
          label={"Password"}
          type={"password"}
          isRequired={true}
          id={"password"}
          formik={formik}
        />
        {isRegister && (
          <InputCommon
            label={"Confirm password"}
            type={"password"}
            isRequired={true}
            id={"confirmPassword"}
            formik={formik}
          />
        )}
        {!isRegister && (
          <div className={boxRemember}>
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
        )}
        <Button
          content={isLoading ? "Loading..." : isRegister ? "REGISTER" : "LOGIN"}
          type={"submit"}
        />
      </form>
      <div className={boxToggleRegister}>
        <Button
          content={
            isRegister ? "Already have an account?" : "Don't have an account?"
          }
          type={"submit"}
          isPrimary={false}
          onClick={handleToggleRegister}
        />
      </div>

      {!isRegister && <div className={lostPassword}>Lost your password?</div>}
    </div>
  );
}

export default Login;

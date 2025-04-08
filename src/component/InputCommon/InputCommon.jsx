import styles from "./InputCommon.module.scss";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import classNames from "classnames";
import { useState } from "react";
function InputCommon({ label, type, isRequired = false, ...props }) {
  const {
    labelInput,
    boxInput,
    container,
    boxIcon,
    inputPassword,
    errorMessage,
    errorContainer,
  } = styles;
  const { formik, id } = props;
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isPassword = type == "password";
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const isShowTextPassword =
    type == "password" && isShowPassword ? "text" : type;
  const isError = formik.errors[id] && formik.touched[id];
  const messageError = formik.errors[id];

  return (
    <div
      className={classNames(container, {
        [errorContainer]: isError,
      })}
    >
      <div className={labelInput}>
        {label} {isRequired && <span> *</span>}
      </div>
      <div className={boxInput}>
        <input
          type={isShowTextPassword}
          className={classNames({ [inputPassword]: isPassword })}
          id={id}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values[id]}
        />
        {isPassword && (
          <div className={boxIcon} onClick={handleShowPassword}>
            {isShowPassword ? <FiEyeOff /> : <FiEye />}
          </div>
        )}
      </div>
      {isError && <div className={errorMessage}>{messageError}</div>}
    </div>
  );
}

export default InputCommon;

import styles from "./InputCommon.module.scss";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import classNames from "classnames";
import { useState } from "react";
function InputCommon({ label, type, isRequired = false }) {
  const { labelInput, boxInput, container, boxIcon, inputPassword } = styles;
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isPassword = type == "password";
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const isShowTextPassword =
    type == "password" && isShowPassword ? "text" : type;

  return (
    <div className={container}>
      <div className={labelInput}>
        {label} {isRequired && <span> *</span>}
      </div>
      <div className={boxInput}>
        <input
          type={isShowTextPassword}
          className={classNames({ [inputPassword]: isPassword })}
        />
        {isPassword && (
          <div className={boxIcon} onClick={handleShowPassword}>
            {isShowPassword ? <FiEyeOff /> : <FiEye />}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputCommon;

import { useState } from "react";

import style from "./tab.module.scss";

const Tab = () => {
  const [login, setLogin] = useState(true);
  const [signup, setSignup] = useState(false);

  function loginHandler() {
    setLogin(true);
    setSignup(false);
  }

  function signupHandler() {
    setLogin(false);
    setSignup(true);
  }

  return (
    <div className={style.tab}>
      <span className={style.buttons}>
        <button
          {...(signup
            ? { className: style.activeTab }
            : { className: style.notActiveTab })}
          onClick={signupHandler}
        >
          ثبت نام
        </button>
        <button
          {...(login
            ? { className: style.activeTab }
            : { className: style.notActiveTab })}
          onClick={loginHandler}
        >
          ورود
        </button>
      </span>
    </div>
  );
};

export default Tab;

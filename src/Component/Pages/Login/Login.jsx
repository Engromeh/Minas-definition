import { Link } from "react-router-dom";
import loginlogo from "../../../Images/alfares_headar_logo 1.png";
import userIcon from "../../../Images/user.svg";
import lockIcon from "../../../Images/lock.svg";

const Login = () => {
  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4 shadow-lg rounded text-end"
        style={{ width: "28rem", backgroundColor: "#202130" }}
      >
        <div className="d-flex justify-content-center">
          <img
            src={loginlogo}
            alt="Logo"
            className="logo"
            style={{ width: "165px", height: "160px", marginBottom: "20px" }}
          />
        </div>

        <form>
          <div className="mb-3 position-relative">
            <img
              src={userIcon}
              alt="User Icon"
              className="input-icon"
              style={{ right: "10px" }}
            />
            <input
              type="email"
              className="form-control pe-5"
              id="exampleInputEmail1"
              style={{ background: "#202130", direction: "rtl" }}
              placeholder="اسم المستخدم"
            />
          </div>
          <div className="mb-3 position-relative">
            <img
              src={lockIcon}
              alt="Lock Icon"
              className="input-icon"
              style={{ right: "10px" }}
            />
            <input
              type="password"
              className="form-control pe-5"
              id="exampleInputPassword1"
              placeholder="كلمة المرور"
              style={{ background: "#202130", direction: "rtl" }}
            />
          </div>

          <button
            type="submit"
            className="btn btn w-100 fw-bold"
            style={{ backgroundColor: "#F4CFAB" }}
          >
            تسجيل الدخول
          </button>

          <p className="text-center mt-4" style={{ color: "white" }}>
            نسيت كلمة المرور؟
            <Link
              to={"/Register"}
              className="text-decoration-none ms-2"
              style={{ color: "#F4CFAB" }}
            >
              إنشاء حساب جديد
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

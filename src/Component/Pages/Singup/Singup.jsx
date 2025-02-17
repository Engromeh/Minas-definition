import { Link } from "react-router-dom";
import loginlogo from "../../../Images/loginlog.svg";
import userIcon from "../../../Images/user.svg";
import lockIcon from "../../../Images/lock.svg";

const Singup = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-[#03003E] px-3">
        <div className="login-bg-gold"></div>
        <div className="login-bg-blue"></div>

        <div
          className="card p-4 text-white w-100"
          style={{
            maxWidth: "400px",
            backgroundColor: "#2B3972",
            borderRadius: "10px",
          }}
        >
          <div className="text-center mb-3 pb-3">
            <img src={loginlogo} alt="Logo" style={{ width: "70px" }} />
          </div>

          <div
            className="mb-3 input-group"
            style={{
              border: "1px solid #FFFFFF",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <input
              type="text"
              className="form-control text-white text-end"
              placeholder="اسم المستخدم"
              style={{
                backgroundColor: "#2B3972",
                border: "none",
                direction: "rtl",
              }}
            />
            <span
              className="input-group-text"
              style={{
                backgroundColor: "#2B3972",
                border: "none",
                padding: "10px",
              }}
            >
              <img src={userIcon} style={{ width: "20px" }} />
            </span>
          </div>

          <div
            className="mb-3 input-group"
            style={{
              border: "1px solid #FFFFFF",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <input
              type="password"
              className="form-control text-white text-end"
              placeholder="كلمة المرور"
              style={{
                backgroundColor: "#2B3972",
                border: "none",
                direction: "rtl",
              }}
            />
            <span
              className="input-group-text"
              style={{
                backgroundColor: "#2B3972",
                border: "none",
                padding: "10px",
              }}
            >
              <img src={lockIcon} alt="Lock Icon" style={{ width: "20px" }} />
            </span>
          </div>

          <div
            className="mb-3 input-group"
            style={{
              border: "1px solid #FFFFFF",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <input
              type="password"
              className="form-control text-white text-end"
              placeholder="اعادة كتابة كلمة المرور"
              style={{
                backgroundColor: "#2B3972",
                border: "none",
                direction: "rtl",
              }}
            />
            <span
              className="input-group-text"
              style={{
                backgroundColor: "#2B3972",
                border: "none",
                padding: "10px",
              }}
            >
              <img src={lockIcon} alt="Lock Icon" style={{ width: "20px" }} />
            </span>
          </div>
          <button
            className="btn w-100 mb-3"
            style={{ backgroundColor: "#212D5D", color: "white" }}
          >
            تسجيل مستخدم جديد{" "}
          </button>

          <div className=" mt-2" style={{ direction: "rtl" }}>
            <Link to={"/login"} className="text-white">
              تسجيل الدخول؟
            </Link>
          </div>
        </div>

        <div className="text-center mt-3 text-white">
          <p className="mt-2">© 2025 alfres - All Right Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Singup;

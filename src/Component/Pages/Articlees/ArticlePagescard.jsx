 import { useNavigate } from "react-router-dom";
import penIcon from "../../../Images/Group 188.svg";
 import cleanderIcon from "../../../Images/Group 189.svg";

const ArticlePagescard = ({ title, date ,navigateTo }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card  p-1 pt-2  text-light "
      style={{ backgroundColor: "#1f2130", borderRadius: "20px"  }} 
      onClick={() => navigate(navigateTo)}
    >
      <div className="card-body">
        <h5
          className="card-title "
          style={{ direction: "rtl", fontSize: "18px" }}
        >
          {title}
        </h5>
        <div className="d-flex  gap-2" style={{ direction: "rtl" }}>
          <img src={penIcon} alt="" style={{ width: "20px", height: "20px" }} />
          <img
            src={cleanderIcon}
            alt=""
            style={{ width: "20px", height: "20px" }}
          />
          <p
            className="card-text"
            style={{ direction: "rtl", color: "#D9D9D9" }}
          >
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticlePagescard;

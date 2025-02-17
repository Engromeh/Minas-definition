import Image from "../../../Images/Group 229.svg";

const OurWorksCard = ({ title }) => {
  return (
    <div
      className="  col-sm-12 col-md-4 col-lg-3"
      style={{ backgroundColor: "#2B3972" }}
    >
      <div
        className="text-center py-3 "
        style={{ backgroundColor: "#1C2752", borderRadius: "12px" }}
      >
        <img src={Image} alt="" style={{ width: "85%" }} />
        <p className="text-light my-2">{title}</p>
        <button
          className="btn text-light mt-2 py-2 px-4"
          style={{
            backgroundColor: "#474753",
            fontSize: "12px",
            direction: "rtl",
            color: "#D9D9D9",
          }}
        >
          شاهد التفاصيل {" >"}
        </button>
      </div>
    </div>
  );
};

export default OurWorksCard;

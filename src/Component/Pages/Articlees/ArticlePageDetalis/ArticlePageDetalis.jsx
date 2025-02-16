import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ph1 from "../../../../Images/Mask group (1).svg";
import ph2 from "../../../../Images/ph22.svg";
import logo188 from "../../../../Images/Group 188.svg";
import logo189 from "../../../../Images/Group 189.svg";
import backLogo from "../../../../Images/Icon back.svg";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const ArticlePageDetalis = () => {
  return (
    <>
      <Navbar />
      <div className="container container-custom">
        <div className="row mb-3 article-header ml-3">
          <div className="col-md-5 col-12 article-box article-box-right">
            <div className="date-icons">
              <span>2025، يناير 30</span>
              <img
                src={logo188}
                alt="Logo 1"
                className="img-fluid"
                style={{ width: "20px" }}
              />
              <img
                src={logo189}
                alt="Logo 2"
                className="img-fluid ms-2"
                style={{ width: "20px" }}
              />
            </div>
            <div className="back-link">
              <img
                src={backLogo}
                alt="Back Logo"
                className="img-fluid"
                style={{ width: "14px" }}
              />
              <span>العودة للمقالات</span>
            </div>
          </div>
          <div className="col-md-6 col-12 article-title">
            <h2>خدمة العملاء والاهتمام بالعميل</h2>
          </div>
        </div>
        <div className="row ml-3">
          <div className="col-md-7 order-md-2 main-image-container ">
            <img
              src={ph1}
              className="img-fluid main-image rounded"
              alt="Main Visual"
              style={{ marginLeft: "15%" }}
            />
          </div>
          <div className="col-md-5 order-md-1">
            <p className="article-text">
              قد تمر عليك بعض المشاكل من العميل ويجب التعامل معها بشكل جيد حتى
              تتجنب بعض المشاكل وتكسبها لما فيه المصلحة بما يتماشى مع أهدافك.
              يمكن أن يشعر المستهلك بعدم الرضا بغض النظر إن كان منتجك أو خدمتك
              بشكل رائع، لذلك يكون من المهم جدًا فهم المنتج أو الخدمة بشكل جيد
              والتصور وتوضيح رؤية العلامة التجارية والقيادة بطريقة احترافية.
              لذلك تقوم الشركات الناجحة باختيار موظفيها بعناية بحيث يقدمون
              لمتعاملهم دعمهم واكتساب ثقتهم.
            </p>
          </div>
        </div>
        <div className="row mt-3 flex-column-reverse flex-md-row">
          <div className="col-md-5 mb-3 mb-md-0 secondary-image-container">
            <img
              src={ph2}
              className="img-fluid secondary-image rounded"
              alt="Secondary Visual"
            />
          </div>
          <div className="col-md-7">
            <p className="article-text">
              قد تمر عليك بعض المشاكل من العميل ويجب التعامل معها بشكل جيد حتى
              تتجنب بعض المشاكل وتكسبها لما فيه المصلحة بما يتماشى مع أهدافك.
              يمكن أن يشعر المستهلك بعدم الرضا بغض النظر إن كان منتجك أو خدمتك
              بشكل رائع، لذلك يكون من المهم جدًا فهم المنتج أو الخدمة بشكل جيد
              والتصور وتوضيح رؤية العلامة التجارية والقيادة بطريقة احترافية.
              لذلك تقوم الشركات الناجحة باختيار موظفيها بعناية بحيث يقدمون
              لمتعاملهم دعمهم واكتساب ثقتهم.
            </p>
          </div>
        </div>

        <div className="d-flex flex-column-reverse d-md-none text-center">
          <p className="article-text">
            قد تمر عليك بعض المشاكل من العميل ويجب التعامل معها بشكل جيد حتى
            تتجنب بعض المشاكل وتكسبها لما فيه المصلحة بما يتماشى مع أهدافك. يمكن
            أن يشعر المستهلك بعدم الرضا بغض النظر إن كان منتجك أو خدمتك بشكل
            رائع، لذلك يكون من المهم جدًا فهم المنتج أو الخدمة بشكل جيد والتصور
            وتوضيح رؤية العلامة التجارية والقيادة بطريقة احترافية. لذلك تقوم
            الشركات الناجحة باختيار موظفيها بعناية بحيث يقدمون لمتعاملهم دعمهم
            واكتساب ثقتهم.
          </p>
          <img
            src={ph1}
            className="img-fluid main-image rounded"
            alt="Main Visual"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArticlePageDetalis;

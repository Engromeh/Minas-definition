import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import Login from "./Component/Pages/Login/Login";
import Singup from "./Component/Pages/Singup/Singup";
import ArticlePagesshow from "./Component/Pages/Articlees/ArticlePagesshow";
import ArticlePageDetalis from "./Component/Pages/Articlees/ArticlePageDetalis/ArticlePageDetalis";
import ServicesPage from "./Component/Pages/Services/ServresShow/ServicesShowPage";
import ServicesDetails from "./Component/Pages/Services/ServiceDetails/ServiceDetails";
import OurWorksPage from "./Component/Pages/ourWorks/OurWorksPage";
import FAQ from "./Component/Pages/FAQ/FAQ";
import CompaneyDetailes from "./Component/Pages/CompaneyDetailes/CompaneyDetailes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/ArticlePageDetalis" element={<ArticlePageDetalis />} />
        <Route path="/ArticlePagesshow" element={<ArticlePagesshow />} />
        <Route path="/Servicepage" element={<ServicesPage />} />
        <Route path="/ServiceDetails" element={<ServicesDetails />} />
        <Route path="/Ourwork" element={<OurWorksPage />} />
        <Route path="/Faq" element={<FAQ />} />
        <Route path="/CompaneyDetailes" element={<CompaneyDetailes />} />
      </Routes>
    </>
  );
}

export default App;

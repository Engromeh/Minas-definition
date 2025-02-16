import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ArticlePagescard from "./ArticlePagescard";

const data = [
  { id: 1, title: "خدمة العملاء والاهتمام بالعميل", date: "34,يناير,2025" , navigateTo:"/ArticlePageDetalis"},
  { id: 2, title: "خدمة العملاء والاهتمام بالعميل", date: "30,يناير,2025" , navigateTo:"/ArticlePageDetalis"},
  { id: 3, title: "خدمة العملاء والاهتمام بالعميل", date: "30,يناير,2025" , navigateTo:"/ArticlePageDetalis"},
  { id: 4, title: "خدمة العملاء والاهتمام بالعميل", date: "30,يناير,2025", navigateTo:"/ArticlePageDetalis" },
  { id: 5, title: "خدمة العملاء والاهتمام بالعميل", date: "30,يناير,2025" , navigateTo:"/ArticlePageDetalis"},
  { id: 6, title: "خدمة العملاء والاهتمام بالعميل", date: "30,يناير,2025" , navigateTo:"/ArticlePageDetalis"},
  { id: 7, title: "خدمة العملاء والاهتمام بالعميل", date: "30,يناير,2025" , navigateTo:"/ArticlePageDetalis"},
  { id: 8, title: "خدمة العملاء والاهتمام بالعميل", date: "30,يناير,2025" , navigateTo:"/ArticlePageDetalis"},
  { id: 8, title: "خدمة العملاء والاهتمام بالعميل", date: "30,يناير,2025" , navigateTo:"/ArticlePageDetalis"},
];
const ArticlePagesshow = () => {
  return (
    <>
    <Navbar />
    <div className="py-5 articleshow-container" style={{ backgroundColor: "#151723" }}>
    <div className="container  ">
        <div className="row gy-4 gx-5">
          {data.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-4">
              <ArticlePagescard
                key={item.id}
                title={item.title}
                date={item.date}
                navigateTo={item.navigateTo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ArticlePagesshow;

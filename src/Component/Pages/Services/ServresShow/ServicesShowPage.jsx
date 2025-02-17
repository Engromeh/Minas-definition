import ServicesCard from "./ServicesShowCard";
import photo7 from "../../../../Images/image 5.svg";
// import photo5 from "../../../../Images/image 5.svg";
// import photo6 from "../../../../Images/image 6.svg";
// import photo8 from "../../../../Images/image 8.svg";
import btnIcon from "../../../../Images/Group 229.svg";

import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const services = [
  {
    id: 1,
    imges: photo7,
    title: "تنظيم فعاليات و مؤتمرات",
    description:
      "تنظيم وتخطيط الفعاليات والمؤتمرات التي تقوم بها الشركة بطريقة احترافية وصنعة، مما يساعد على تحقيق أهداف الشركة وزيادة التفاعل بين المشاركين من خلال تنظيم الفعالية أو المؤتمر بطريقة تفاعلية.",
  },
  {
    id: 2,
    imges: photo7,
    title: "تصميم المتاجر الإلكترونية",
    description:
      "إنشاء متجر إلكتروني ناجح للشركات يعرض منتجاتها أو خدماتها على الإنترنت، مما يزيد فرص تحقيق المبيعات وتوسيع نطاق التغطية من خلال الوصول للعملاء في كل مكان، وزيادة فرص الترويج.",
  },
  {
    id: 3,
    imges: photo7,
    title: "تصميم المواقع الإلكترونية",
    description:
      "بامتلاكك موقعًا جذابًا وعمليًا وسريع الاستجابة يركز على العلامة التجارية يمكن أن يساهم في تحويل الزوار إلى عملاء.",
  },
  {
    id: 4,
    imges: photo7,
    title: "UGC",
    description:
      "من خلاله نتيح للعملاء إنشاء ونشر المحتوى المتعلق بالعلامة التجارية أو المنتج، ونوجه إلى زيادة التفاعل بين العملاء وتحليل المحتوى الذي ينتجه العملاء لتحسين تجاربهم وزيادة الثقة وتحقيق أهداف العمل.",
  },
  {
    id: 5,
    imges: photo7,
    title: "تطوير مشاريع",
    description:
      "توجه إلى تطوير مشاريع جديدة أو تحسين مشاريع موجودة، وهذه الخدمة تهدف إلى تحقيق أهداف العملاء، وتحسين الخدمات، وزيادة الأرباح، وتحسين جودة المنتجات والخدمات، وزيادة فرص النجاح.",
  },
  {
    id: 6,
    imges: photo7,
    title: "إدارة التسويق الإلكتروني",
    description:
      "توجه إلى إدارة حملات التسويق الإلكتروني والترويج للعلامة التجارية من خلال شبكات التواصل الاجتماعي، والبريد الإلكتروني، والمواقع الإلكترونية، وزيادة الوعي بالعلامة التجارية، وزيادة المبيعات، وتحسين تجربة العملاء.",
  },
  {
    id: 7,
    imges: photo7,
    title: "SEO",
    description:
      "تهيئة المواقع للبحث، لتحسين موقعك الإلكتروني ليكون أكثر رؤية على محركات البحث، وزيادة عدد الزوار المحتملين، ورفع فرصة تحقيق الأهداف التسويقية، وتحسين البنية التقنية للموقع مما يجعلها أكثر سرعة وأمانًا، وتحسين تجربة المستخدم.",
  },
  {
    id: 8,
    imges: photo7,
    title: "تصوير منتجات",
    description:
      "تعتبر خدمة تصوير المنتجات أحد العناصر الأساسية لنجاح أي علامة تجارية في ظل العصر الرقمي، حيث تلعب الصور عالية الجودة دور كبير في جذب العملاء وتوضيح مزايا المنتجات بشكل يلفت الأنظار من خلال تصوير احترافي.",
  },
];

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <div
        className=" py-5 px-3 articleshow-container "
        style={{ backgroundColor: "#03003E" }}
      >
        <div className="container">
          <div className=" row gy-5 gx-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="col-12 col-sm-6 col-md-6 col-lg-3"
              >
                <ServicesCard
                  key={service.id}
                  description={service.description}
                  title={service.title}
                  images={service.imges}
                />
              </div>
            ))}
          </div>
        </div>
        <div
          className="m-auto me-md-5 pb-2 ms-md-auto"
          style={{ width: "fit-content" }}
        >
          <button
            className="btn d-block "
            style={{ backgroundColor: "#212D5D" }}
          >
            استشاره مجانيه{" "}
            <img src={btnIcon} alt="" style={{ width: "30px" }} />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;

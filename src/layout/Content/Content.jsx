import './Content.css'
import ContentTop from "../../compontents/ContentTop/ContentTop";
import ContentMain from "../../compontents/ContentMain/ContentMain";

const Content = () => {
  return (
    <div className="main-content">
      <ContentTop />
      <ContentMain />

    </div>
  );
}

export default Content;
import ContentSection from "./ContentSection";
import DetailComponent from "./DetailComponent";
import Footer from "./Footer";
import Header from "./Header";
import MiddleSection from "./MiddleSection";

const MainComponent = () => {
  return (
    <>
      <Header />
      <DetailComponent />
      <ContentSection />
      <MiddleSection />
      <Footer />
    </>
  );
};
export default MainComponent;

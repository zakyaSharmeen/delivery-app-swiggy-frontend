import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Layout = ({ children, showHero = false }) => {
  // const Layout = ({ children = false }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* <Hero /> */}
      {showHero && <Hero />}
      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

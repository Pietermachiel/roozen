import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

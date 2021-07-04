import Header from "./header";
import Footer from "./footer";
import Meta from "./meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

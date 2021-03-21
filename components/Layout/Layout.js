import Head from "../Head";
import Heading from "../Heading";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head
        title="Javascript Frameworks MA4"
        description="Module Assignment"
        author="Olav Omtveit"
        keyWords="Next JS, JS"
      />
      <Heading content="Next JS" />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
}

import Navbar from "./Navbar";
import Footer from "./Footer";
import BuyTag from "./BuyTag";

// this is the main layout of the web page refer Next.js layout

export default function Layout({ children, data }) {
  return (
    <>
      {/* Navbar */}
      <div>
        <Navbar data={data} />
      </div>
      {/* Main content */}
      <main>
        {/* Buy tag (remove it from component and here) */}
        <BuyTag />
        {/* All the children components of react */}
        {children}
      </main>
      {/* Footer */}
      <div>
        <Footer data={data} />
      </div>
    </>
  );
}

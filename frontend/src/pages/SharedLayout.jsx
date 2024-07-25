import { Outlet } from "react-router-dom";
import NavMenu from "../components/NavMenu/NavMenu.jsx";
import Footer from "../components/Footer/Footer.jsx";

const SharedLayout = () => {
  return (
    <>
      {/* nav/header */}
      <NavMenu />
      <h2>Ich bin die zukünftige Navbar</h2>
      <main className="main-container">
        <Outlet />
      </main>
      <h2>Ich bin der zukünftige Footer</h2>
      {/* footer */}
      <Footer />
    </>
  );
};

export default SharedLayout;

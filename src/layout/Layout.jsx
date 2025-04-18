import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout() {
  const location = useLocation();
  const path = location.pathname;

  // Classe spécifique selon la route
  let pageClass = "";

  if (path === "/") pageClass = "home";
  else if (path === "/a-propos") pageClass = "apropos";
  else if (path.startsWith("/logement/")) pageClass = "logement";
  else pageClass = "notfound";

  return (
    <>
      <Header />
      <main className={`page ${pageClass}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;

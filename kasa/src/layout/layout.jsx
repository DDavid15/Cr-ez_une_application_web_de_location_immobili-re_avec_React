import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

function Layout() {
  const location = useLocation();
  const path = location.pathname;

  let mainClass = "main";

  if (path === "/") mainClass = "home";
  else if (path === "/a-propos") mainClass = "apropos";
  else if (path.startsWith("/logement/")) mainClass = "logement";
  else mainClass = "default";

  return (
    <>
      <Header />
      <main className={mainClass}>
        <Outlet /> {/* ← C'est ce qui permet d'afficher tes pages */}
      </main>
      <Footer />
    </>
  );
}

export default Layout;

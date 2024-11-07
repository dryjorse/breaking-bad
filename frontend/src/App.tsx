import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./constants/routes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useLayoutEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

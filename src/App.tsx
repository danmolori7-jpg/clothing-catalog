import { useLayoutEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { NotFound } from "./pages/NotFound/NotFound";
import { PrivacyPage } from "./pages/PrivacyPage/PrivacyPage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  const previousPathname = useRef<string | null>(null);

  useLayoutEffect(() => {
    const isInitialRender = previousPathname.current === null;
    const didRouteChange =
      previousPathname.current !== null && previousPathname.current !== pathname;

    previousPathname.current = pathname;

    if (hash === "") {
      if (isInitialRender || didRouteChange) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: didRouteChange && pathname === "/" ? "smooth" : "auto",
        });
      }

      return;
    }

    const targetElement = document.getElementById(hash.slice(1));
    targetElement?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

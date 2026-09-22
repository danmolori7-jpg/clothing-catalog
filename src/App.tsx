import { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { Header } from "./components/Header/Header";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash === "") {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
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
      </Routes>
    </>
  );
}

export default App;

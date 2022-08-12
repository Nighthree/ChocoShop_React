import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";

// 前台
const Layout = lazy(() => import("./front/layout"));
const Home = lazy(() => import("./front/home"));
const Products = lazy(() => import("./front/products"));
// 後台
const Aside = lazy(() => import("./back/aside"));

const StoreContainer = () => {
  return (
    <Router>
      <Suspense fallback={<div className="display-5">Loading</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
          </Route>
          <Route path="/BackStage" element={<Aside />}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default StoreContainer;

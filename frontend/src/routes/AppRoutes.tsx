import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../shared/components/Layout";
import Home from "../pages/Home";

const Product = lazy(() => import("../pages/Product"));

export default function AppRoutes() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="product/:slug" element={<Product />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
};
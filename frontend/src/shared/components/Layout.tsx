import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header/Header";
import Container from "./Container";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

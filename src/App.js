import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Faq } from "./components/Faq/Faq";
import { Contact } from "./components/Contact/Contact";
import { Reviews } from "./components/Reviews/Reviews";
import { Numbers } from "./components/Numbers/Numbers";

function App() {
  return (
    <>
      <Header />

      {/* <Hero /> */}
      <Numbers />
      {/* <Search /> */}
      {/* <Services /> */}
      <Faq />
      <Reviews />
      <Footer />
      {/* <Call /> */}
      {/* <Registration /> */}
      {/* <Thank /> */}
      {/* <Record /> */}
      {/* <Vaccination /> */}
      <Contact />
      {/* <Menu /> */}
    </>
  );
}

export default App;

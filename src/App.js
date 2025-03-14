import { Call } from "./components/Call/Call";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Menu } from "./components/Menu/Menu";
import { Registration } from "./components/Registration/Registration";
import { Search } from "./components/Search/Search";

function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Numbers /> */}
      <Search />
      {/* <Services /> */}
      {/* <Faq /> */}
      {/* <Reviews /> */}
      <Footer />
      <Call />
      <Registration />
      {/* <Thank /> */}
      {/* <Record /> */}
      {/* <Vaccination /> */}
      {/* <Contact /> */}
      <Menu />
    </>
  );
}

export default App;

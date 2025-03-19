import { Call } from "../components/Call/Call";
import { Contact } from "../components/Contact/Contact";
import { Faq } from "../components/Faq/Faq";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Menu } from "../components/Menu/Menu";
import { Numbers } from "../components/Numbers/Numbers";
import { Registration } from "../components/Registration/Registration";
import { Reviews } from "../components/Reviews/Reviews";
import { Search } from "../components/Search/Search";
import { Services } from "../components/Services/Services";
export const MainPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Numbers />
      <Search />
      <Services />
      <Faq />
      <Reviews />
      <Footer />
      <Call />
      <Registration />
      {/* <Thank />  */}
      {/* <Record />  */}
      {/* <Vaccination />  */}
      <Contact />
      <Menu />
    </>
  );
};

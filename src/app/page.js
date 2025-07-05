import Image from "next/image";
import Header from "./components/Header";
import WelcomeBanner from "./components/WelcomeBanner";
import OurClients from "./components/info/ourClients";
import News from "./components/last_blocks/News";
import Dropdown from "./components/modal/index";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="">
      <header>
        <Header />
      </header>
      <main>
        <WelcomeBanner/>
        <OurClients/>
        <News/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

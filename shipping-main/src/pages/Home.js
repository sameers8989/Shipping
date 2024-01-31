import About from "../components/Aboutus/About";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Service from "../components/Services/Service";
import Cargoservice from "../components/cargoServices/Cargoservice";
import Logoipsum from "../components/logoipsum/Logoipsum";
import Works from "../components/howitworks/Works";
import Vedio from "../components/vedio/Vedio";
import Feedback from "../components/feedback/Feedback";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="homeContainer">
      <Header />
      <Navbar />
      <Cargoservice />
      <About />
      <Service />
      <Logoipsum />
      <Works />
      <Vedio />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}

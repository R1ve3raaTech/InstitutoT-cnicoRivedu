import About from "../components/About";
import Contact from "../components/Contact";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LandingNavigation from "../components/LandingNavigation";
import Navbar from "../components/Navbar";
import PaymentMethods from "../components/PaymentMethods";

export default function Home() {
  return <><LandingNavigation /><Navbar /><main><Hero /><Courses /><About /><PaymentMethods /><Contact /></main><Footer /></>;
}

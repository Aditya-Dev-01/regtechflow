import Header from "./components/Header/Header";
import LayoutComponent from "./components/Layout/LayoutComponent";
import Hero from "./components/Hero/Hero";
import ProbleSolvedbyRegTech from "./components/ProblemSolvedbyRegTech/ProbleSolvedbyRegTech";
import RegtechFlow from "./components/RegtechFlow/RegtechFlow";
import KeyFeatures from "./components/KeyFeatures/KeyFeatures";
import SecurityPolicy from "./components/Security&Policy/Security&Policy";
import CloudHoisting from "./components/Hoisting/CloudHoisting";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <LayoutComponent>
        <Hero />
      </LayoutComponent>
      <LayoutComponent color={"#e6e4e666"} py={"32px"}>
        <ProbleSolvedbyRegTech />
      </LayoutComponent>
      <LayoutComponent py={"32px"}>
        <RegtechFlow />
      </LayoutComponent>
      <LayoutComponent py={"32px"}>
        <KeyFeatures />
      </LayoutComponent>
      <LayoutComponent color={"#6200EE"}>
        <CloudHoisting />
      </LayoutComponent>
      <LayoutComponent>
        <SecurityPolicy />
      </LayoutComponent>
      <LayoutComponent color={"#e6e4e666"}>
        <ContactUs />
      </LayoutComponent>
      <LayoutComponent>
        <Footer />
      </LayoutComponent>
    </div>
  );
}

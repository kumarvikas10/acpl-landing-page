import styles from "./Home.module.css";
import { useEffect } from "react";
import HeroSection from "../HeroSection/HeroSection";
import WhySection from "../WhySection/WhySection";
import ServiceSection from "../ServicesSection/ServiceSection";
import DeliverySection from "../DeliverySection/DeliverySection";
import TrustSection from "../TrustSection/TrustSection";
import PartnerSection from "../PartnerSection/PartnerSection";
import CaseSection from "../CaseSection/CaseSection";
import NewsletterSection from "../NewsletterSection/NewsletterSection";
import ContactSection from "../ContactSection/ContactSection";

const Home = () => {
  useEffect(() => {
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );
    [...popoverTriggerList].forEach((el) => new window.bootstrap.Popover(el));
  }, []);

  return (
    <>
      <HeroSection />
      <WhySection />
      <ServiceSection />
      <DeliverySection />
      <TrustSection />
      <PartnerSection />
      <CaseSection />
      <NewsletterSection />
      <ContactSection />
    </>
  );
};

export default Home;

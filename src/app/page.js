import Image from "next/image";
import Hero from "../../components/Home/Hero";
import ShopByAge from "../../components/Home/ShopByAge";
import AgeWiseToys from "../../components/Home/AgeWiseToys";
import ToyOfferBanner from "../../components/Home/ToyOfferBanner";
import SurpriseToyBox from "../../components/Home/SurpriseToyBox";
import Bestsellers from "../../components/Home/Bestsellers";
import AboutUs from "../../components/Home/AboutUs";
import FAQSection from "../../components/Home/FAQSection";
import ContactSection from "../../components/Home/ContactSection";
import WhyChooseUs from "../../components/Home/WhyChooseUs";
import Categories from "../../components/Home/Categories";

export default function Home() {
  return (
    <>
    <Hero/>
    <ShopByAge/>
    <AboutUs/>
    <AgeWiseToys/>
    <Bestsellers/>  
    <ToyOfferBanner/>
    <Categories/>
   <SurpriseToyBox/> 
   <WhyChooseUs/>
   <FAQSection/>
    <ContactSection/>
    </>
  );
}

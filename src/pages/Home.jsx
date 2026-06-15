import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import FeaturedDishes from "../components/FeaturedDishes/FeaturedDishes";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedDishes />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
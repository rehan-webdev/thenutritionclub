import About from "@/components/About";
import Booking from "@/components/Booking";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Insights from "@/components/Insights";
import MealPlan from "@/components/MealPlan";
import Navbar from "@/components/Navbar";
import Plans from "@/components/Plans";
import Programs from "@/components/Programs";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Tools from "@/components/Tools";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <About />
        <Tools />
        <MealPlan />
        <Team />
        <Plans />
        <Testimonials />
        <Booking />
        <Insights />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

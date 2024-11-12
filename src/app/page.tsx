import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import TestimonialCards from "@/components/TestimonialCards";
import FeaturedCourses from "@/components/ui/FeaturedCourses";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";



export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpcomingWebinars/>
      <Instructor/>
    </main>
  )
}

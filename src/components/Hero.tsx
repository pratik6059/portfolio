
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ transform: `translateY(${scrollY * -0.3}px)` }}
        ></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div 
          className="text-center lg:text-left space-y-8 animate-fade-in"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Hi, I'm{" "}
              <span className="text-yellow-400 relative">
                Pratik
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 rounded"></div>
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-300 font-light">
              SEO Growth Specialist &{" "}
              <span className="text-yellow-400">Creative Technologist</span>
            </h2>
          </div>

          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Helping businesses grow through data-driven SEO, cutting-edge websites, 
            and creative storytelling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 font-semibold"
              onClick={() => scrollToSection("portfolio")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection("contact")}
            >
              Hire Me
            </Button>
          </div>
        </div>

        {/* Profile Image */}
        <div 
          className="flex justify-center lg:justify-end"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <img
              src="/lovable-uploads/9772ed49-120d-453b-b3e3-3f4607ef898d.png"
              alt="Pratik Sable - SEO & Growth Marketing Expert"
              className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-yellow-400 shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{ opacity: Math.max(0, 1 - scrollY * 0.01) }}
      >
        <ArrowDown className="w-6 h-6 text-yellow-400" />
      </div>
    </section>
  );
};

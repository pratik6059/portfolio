
import { useEffect, useState } from "react";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            About <span className="text-yellow-400">Me</span>
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              With over <span className="font-semibold text-yellow-600">3+ years of experience</span> in SEO, 
              content strategy, and digital marketing, I specialize in driving organic growth for B2B SaaS products. 
              I've led teams, executed high-impact campaigns, and scaled visibility by over{" "}
              <span className="font-semibold text-yellow-600">120%</span> for top startups.
            </p>
            
            <p className="text-gray-600 italic">
              When I'm not crunching SEO metrics, I'm usually bingeing anime, riding my motorcycle, 
              or staying up-to-date with the latest tech trends.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { number: "3+", label: "Years Experience" },
              { number: "120%", label: "Growth Achieved" },
              { number: "50+", label: "Projects Completed" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="text-3xl font-bold text-yellow-400">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Image, PenTool, User } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "SEO & Growth Marketing",
      description: "On-page & Off-page SEO, Keyword Research, Link Building, Programmatic SEO",
      color: "bg-yellow-400"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "WordPress, Webflow, Elementor, Shopify",
      color: "bg-blue-500"
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Graphic & Motion Design",
      description: "Logos, Banners, Social Media Creatives, Motion Videos",
      color: "bg-purple-500"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Content Writing",
      description: "SEO Blogs, Website Copy, Product Descriptions",
      color: "bg-green-500"
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Lead Generation",
      description: "Dripify, LinkedIn Sales Navigator, ICP Creation",
      color: "bg-red-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-yellow-400">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader className="text-center">
                <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

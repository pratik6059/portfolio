
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Portfolio = () => {
  const projects = [
    {
      category: "SEO",
      title: "Chisel - SEO Lead",
      description: "Led SEO strategy resulting in 120% organic traffic growth",
      result: "120% traffic growth",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      tags: ["SEO", "Growth", "Leadership"]
    },
    {
      category: "SEO", 
      title: "CallHippo - Digital Marketing",
      description: "Executed comprehensive digital marketing campaigns",
      result: "200% lead increase",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tags: ["Digital Marketing", "Lead Gen", "SaaS"]
    },
    {
      category: "Web Design",
      title: "Modern SaaS Website",
      description: "Designed and developed responsive website using Webflow",
      result: "50% conversion boost",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      tags: ["Webflow", "Design", "Responsive"]
    },
    {
      category: "Motion Design",
      title: "Brand Animation Package",
      description: "Created engaging motion graphics for social media campaigns",
      result: "300% engagement",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tags: ["Motion", "Branding", "Social Media"]
    }
  ];

  const categories = ["All", "SEO", "Web Design", "Motion Design", "Logo Design"];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-yellow-400">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Showcasing successful projects that drive real business results
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-yellow-400 text-black hover:bg-yellow-300" : "hover:bg-yellow-400 hover:text-black"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-yellow-400 text-black">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-yellow-600 font-semibold">
                    {project.result}
                  </div>
                  <Button size="sm" variant="outline" className="hover:bg-yellow-400 hover:text-black">
                    View Case Study
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Resume = () => {
  const experiences = [
    {
      company: "Chisel",
      role: "SEO Lead",
      period: "Jan 2022 – Present",
      description: "Leading SEO strategy and execution, managing team of specialists",
      achievements: ["120% organic traffic growth", "Led team of 5 specialists", "Implemented programmatic SEO"]
    },
    {
      company: "AppItsimple (CallHippo)",
      role: "Digital Marketing Executive", 
      period: "2021",
      description: "Executed comprehensive digital marketing campaigns",
      achievements: ["200% lead generation increase", "Multi-channel campaign management", "Content strategy development"]
    }
  ];

  const education = [
    { degree: "Bachelor of Engineering", institution: "University", year: "2020" },
    { degree: "Higher Secondary Certificate", institution: "College", year: "2016" },
    { degree: "Secondary School Certificate", institution: "School", year: "2014" }
  ];

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-yellow-400">Resume</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Professional experience and educational background
          </p>
          
          <Button className="bg-yellow-400 text-black hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
            Download My Resume – PDF
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-8 h-8 bg-yellow-400 rounded-full mr-3"></div>
              Professional Experience
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-l-4 border-l-yellow-400">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-gray-900">{exp.role}</CardTitle>
                        <CardDescription className="text-yellow-600 font-semibold text-lg">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-8 h-8 bg-yellow-400 rounded-full mr-3"></div>
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-l-4 border-l-yellow-400">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">{edu.degree}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {edu.institution} • {edu.year}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Skills */}
            <div className="mt-12">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Core Skills</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "SEO Strategy", "Google Analytics", "WordPress", "Webflow", 
                  "Content Marketing", "Link Building", "Programmatic SEO", 
                  "Motion Design", "Lead Generation", "Data Analysis"
                ].map((skill) => (
                  <Badge key={skill} className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

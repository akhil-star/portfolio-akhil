import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, FileText, ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  const projects = [
    {
      title: "ZenGolf - Web3 Betting Game",
      description: "Smart contract-backed scoring with live leaderboard and joyful UX.",
      image: '/zengolf.png',
      link: "https://zengolf.vercel.app/",
    },

    {
      title: "Shift Partner – NHS App",
      description: "Heuristic fixes for sign-up flow, UI consistency, and mobile UX improvements.",
      image: "/shiftpartner.png",
      link: "https://shiftpartner.com/",
    },
    {
      title: "Viewmo – Digital Signage UI",
      description: "Designed a responsive signage CMS with real-time control dashboard.",
      image: "/viewmo.png",
      link: "https://viewmo.digital/",
    },
    {
      title: "Karma Tickets – Booking Platform",
      description: "Redesigned booking UI across web & mobile for better ticketing experience.",
      image: "/karmaticket.png",
      link: "https://karmatickets.ca/",
    },
    {
      title: "Deutsche Aligners – Dental Lab Portal",
      description: "Clinic-lab platform with case tracking, super admin views and user stories.",
      image: "/dutschea.png",
      link: "https://www.deutschealigners.com/",
    },
  ].filter(Boolean)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white scroll-smooth">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4 tracking-tight">
              Akhil Biju
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">Product Designer</p>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Designs That Feel. Interfaces That Work.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#projects">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8 py-6 text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-white/10 hover:text-white hover:border-gray-400 px-8 py-6 text-lg font-medium transition-all duration-300 backdrop-blur-sm bg-transparent"
              >
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Selected Works
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A curated collection of real-world projects solving design challenges across tech and healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                href={project?.link || "#"}
                key={project?.title}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project?.image || "/placeholder.svg"}
                      alt={project?.title || "Project Image"}
                      width={400}
                      height={300}
                      className="w-full h-48 object-fit transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                      {project?.title || "Untitled Project"}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{project?.description || "No description available."}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Collaborate Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Let&#39;s Collaborate
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                Ready to bring your ideas to life? Let&#39;s create something amazing together.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="mailto:akhiloscar@gmail.com"
                  className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-full px-6 py-4 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <Mail className="h-5 w-5 text-purple-400 group-hover:text-purple-300" />
                  <span className="text-white font-medium">Email</span>
                </Link>

                <Link
                  href="https://linkedin.com/in/dr-akhil-biju-uxui-design/"
                  className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-full px-6 py-4 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <Linkedin className="h-5 w-5 text-blue-400 group-hover:text-blue-300" />
                  <span className="text-white font-medium">LinkedIn</span>
                </Link>

                <Link
                  href="https://drive.google.com/file/d/1XxopsCsHY5MAaAfAkT9VRWnOr-G6xbfG/view"
                  className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-full px-6 py-4 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <FileText className="h-5 w-5 text-green-400 group-hover:text-green-300" />
                  <span className="text-white font-medium">Resume</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} Akhil Biju. Crafted with passion and precision.</p>
        </div>
      </footer>
    </div>
  )
}

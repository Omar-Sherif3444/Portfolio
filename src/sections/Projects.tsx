import { SectionHeading } from '../components/ui/SectionHeading'
import { ProjectCard } from '../components/projects/ProjectCard'
import { BarbershopIllustration } from '../components/projects/BarbershopIllustration'
import { CinemaIllustration } from '../components/projects/CinemaIllustration'
import { ShopIllustration } from '../components/projects/ShopIllustration'
import { projects } from '../data/projects'

export function Projects() {
  const [barbershop, cinema, shop] = projects

  return (
    <section id="projects" className="py-28 sm:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I've built"
          description="Three projects that reflect how I actually work: careful about data and logic on the back end, deliberate about the interface on the front end."
        />

        <div className="mt-14 flex flex-col gap-8">
          <ProjectCard
            project={barbershop}
            illustration={<BarbershopIllustration />}
            url="ahmed-ramdan-barbershop.vercel.app"
          />
          <ProjectCard project={cinema} illustration={<CinemaIllustration />} url="localhost/eyt-cinema/seats" />
          <ProjectCard
            project={shop}
            illustration={<ShopIllustration />}
            url="dokan-shop-iota.vercel.app"
          />
        </div>
      </div>
    </section>
  )
}

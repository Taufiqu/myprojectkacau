"use client"
import { useState } from 'react'
import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
  {
    id: 1,
    title: "Iris Flower Classifier",
    description: "ML model to classify iris flowers using Scikit-learn.",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web", "Machine Learning"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "Analyst Sentiment Review",
    description: "Analyze and visualize analyst sentiment using ML.",
    image: "/images/projects/2.jpg",
    tag: ["All", "Machine Learning"],
    gitUrl: "/",
    previewUrl: "/"
  },
//   {
//     id: 3,
//     title: "Personal Portfolio Website",
//     description: "Built with Next.js and Tailwind CSS.",
//     image: "/images/projects/3.jpg",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/"
//   },
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All")
  const handleTagChange = (newTag) => setTag(newTag)
  const filteredProjects = projectsData.filter(project =>
    project.tag.includes(tag)
  )

  return (
    <section className='px-4 md:px-12 py-10'>
      <h2 className='text-center text-4xl font-bold text-white mb-8'>
        My Project Kacau
      </h2>

      <div className='text-white flex flex-wrap justify-center gap-4 mb-8'>
        {["All", "Web", "Machine Learning"].map(t => (
          <ProjectTag
            key={t}
            name={t}
            onClick={handleTagChange}
            isSelected={tag === t}
          />
        ))}
      </div>

      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection

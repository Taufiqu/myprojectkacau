"use client"
import { useState } from 'react'
import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import Image from 'next/image'
import { XMarkIcon } from '@heroicons/react/24/outline'

const projectsData = [
  {
    id: 1,
    title: "Iris Flower Classifier",
    description: "ML model to classify iris flowers using Scikit-learn.",
    image: "/images/projects/1.jpg",
    fullDescription: "Iris Flower Classifier is a machine learning model built that using Scikit-learn that classifies the iris flowers into different species based on specific features such as petal length, petal width, sepal length, and sepal width. It is a classification task that leverages a dataset of iris flowers.",
    tag: ["All", "Web", "Machine Learning"],
    gitUrl: "https://github.com/Taufiqu/-ML-iris-clasifier",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "Analyst Sentiment Review",
    description: "Analyze and visualize analyst sentiment using ML.",
    fullDescription: "Review Sentiment Analysis is a machine learning technique used to identify and classify opinions or emotions in text, such as product reviews or comments on social media. The goal is to categorize reviews into positive, negative, or neutral sentiment. The process starts by collecting review data, cleaning the text, and then using machine learning models to learn the sentiment patterns contained in the reviews. The results of this analysis are useful for understanding user perceptions of products or services, helping companies improve user experience and make data-driven decisions.",
    image: "/images/projects/2.jpg",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/Taufiqu/-ML-Analyst-Sentiment/",
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

const [showModal, setShowModal] = useState(false)
const [selectedProject, setSelectedProject] = useState(null)

const handlePreviewClick = (project) => {
  setSelectedProject(project)
  setShowModal(true)
}

const closeModal = () => {
  setShowModal(false)
  setSelectedProject(null)
}

{selectedProject && (
  <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
    <div className="bg-[#1a1a1a] rounded-lg p-6 max-w-md mx-4 text-white relative">
      <button
        onClick={() => setSelectedProject(null)}
        className="absolute top-2 right-4 text-white text-2xl"
      >
        &times;
      </button>
      <img
        src={selectedProject.image}
        alt={selectedProject.title}
        className="rounded mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{selectedProject.title}</h3>
      <p className="text-sm text-gray-300">{selectedProject.description}</p>
    </div>
  </div>
)}

  return (
    <section id="projects" className='pt-50 px-4 md:px-12 py-10'>
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
            fullDescription={project.fullDescription}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            onPreviewClick={() => handlePreviewClick(project)}
          />
        ))}
      </div>

      {showModal && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-[#181818] text-white rounded-lg p-8 w-[98%] max-w-4xl relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <XMarkIcon className="w-8 h-8" />
            </button>
            <h3 className="text-4xl font-semibold mb-6">{selectedProject.title}</h3>
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              width={800}
              height={450}
              className="rounded mb-6 w-full h-auto object-cover"
            />
            <p className="text-xl text-[#ADB7BE]">{selectedProject.fullDescription}</p>
          </div>
        </div>
      )}

    </section>
  )
}

export default ProjectsSection

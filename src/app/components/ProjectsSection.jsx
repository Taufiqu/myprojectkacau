"use client";
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';

const projectsData = [
  {
    id: 1,
    title: "Iris Flower Classifier",
    description: "ML model to classify iris flowers using Scikit-learn.",
    fullDescription: "Iris Flower Classifier is a machine learning model built using Scikit-learn...",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web", "Machine Learning"],
    gitUrl: "https://github.com/Taufiqu/-ML-iris-clasifier",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "Analyst Sentiment Review",
    description: "Analyze and visualize analyst sentiment using ML.",
    fullDescription: "Review Sentiment Analysis is a machine learning technique used to identify and classify...",
    image: "/images/projects/2.jpg",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/Taufiqu/-ML-Analyst-Sentiment/",
    previewUrl: "/"
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleTagChange = (newTag) => setTag(newTag);
  const handlePreviewClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const filteredProjects = projectsData.filter(project =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" className="px-4 md:px-12 pt-20 pb-12 bg-[#0f0f0f]">
      <h2 className="text-center text-4xl font-bold text-white mb-8 border-b border-[#39FF14]/20 pb-2 w-fit mx-auto">
        My Project Kacau
      </h2>

      <div className="flex flex-wrap justify-center gap-4 text-white mb-8">
        {["All", "Web", "Machine Learning"].map(t => (
          <ProjectTag
            key={t}
            name={t}
            onClick={handleTagChange}
            isSelected={tag === t}
          />
        ))}
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Modal */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center px-4">
          <div className="bg-[#181818] text-white rounded-lg p-6 w-full max-w-3xl relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              width={800}
              height={450}
              className="rounded mb-4 w-full h-auto object-cover"
            />
            <p className="text-base text-[#ADB7BE]">{selectedProject.fullDescription}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;

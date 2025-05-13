import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from "next/link"

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, onPreviewClick }) => {
  return (
    <div>
      <div
          className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden"
          style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100">
            <button
              onClick={onPreviewClick}
              className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex justify-center items-center transition-all duration-300 hover:scale-110"
            >
              <EyeIcon className="h-6 w-6 text-[#ADB7BE] hover:text-white" />
            </button>
            <a
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex justify-center items-center transition-all duration-300 hover:scale-110"
            >
              <CodeBracketIcon className="h-6 w-6 text-[#ADB7BE] hover:text-white" />
            </a>
          </div>
        </div>
      <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard

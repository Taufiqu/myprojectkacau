import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from "next/link"

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, onPreviewClick }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-[#181818] hover:shadow-lg transition duration-300 border border-[#33353F]/30 group">
      
      {/* Image wrapper */}
      <div
        className='h-52 md:h-72 relative group'
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Overlay */}
        <div className='absolute inset-0 flex justify-center items-center gap-4 
          bg-[#181818] bg-opacity-80 opacity-100 
          sm:bg-opacity-0 sm:opacity-0 
          sm:group-hover:bg-opacity-80 sm:group-hover:opacity-100 
          transition-all duration-500'>

          {/* GitHub Button */}
          <Link
            href={gitUrl}
            target="_blank"
            className='h-12 w-12 md:h-14 md:w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex justify-center items-center transition'
          >
            <CodeBracketIcon className='h-6 w-6 text-[#ADB7BE] hover:text-white' />
          </Link>

          {/* Preview Button */}
          <button
            onClick={onPreviewClick}
            className='h-12 w-12 md:h-14 md:w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex justify-center items-center transition'
          >
            <EyeIcon className='h-6 w-6 text-[#ADB7BE] hover:text-white' />
          </button>
        </div>
      </div>

      {/* Text content */}
      <div className='text-white py-6 px-4'>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE] text-sm'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard;

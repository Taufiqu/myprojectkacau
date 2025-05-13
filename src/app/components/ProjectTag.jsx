import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
  const baseStyles = "rounded-full border-2 px-6 py-3 text-xl cursor-pointer transition";
  const selectedStyle = isSelected
    ? "text-black bg-[#39FF14] border-[#39FF14]"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      type="button"
      className={`${baseStyles} ${selectedStyle}`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  )
}

export default ProjectTag

// app/sd/page.tsx
"use client"
import React from 'react'
import { FaceFrownIcon, CurrencyDollarIcon, SparklesIcon } from '@heroicons/react/24/solid'

const SDPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Web nya belum dibuat ges
      </h1>
      <p className="text-lg md:text-xl mb-6">
        ntar gw buatin kalo gw dibayarin hehe
      </p>
      <div className="flex gap-4 text-[#39FF14]">
        <FaceFrownIcon className="w-10 h-10" />
        <CurrencyDollarIcon className="w-10 h-10" />
        <SparklesIcon className="w-10 h-10" />
      </div>
    </div>
  )
}

export default SDPage;

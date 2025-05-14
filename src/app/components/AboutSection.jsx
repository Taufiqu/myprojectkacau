"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import SkillCard from './SkillCard'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpenIcon, GraduationCapIcon, AwardIcon } from 'lucide-react'

const CardItem = ({ text, icon: Icon, onClick, href }) => {
  const isLink = Boolean(href);

  const content = (
    <motion.div
      whileHover={{ scale: 1.03, backgroundColor: '#202820' }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="flex items-center justify-between bg-[#1a1a1a] rounded-xl p-4 mb-4 shadow-md border border-[#39FF14]/20 hover:shadow-[0_0_15px_#39FF14]/40 cursor-pointer"
    >
      <span className="text-white font-medium">{text}</span>
      <Icon className="text-[#39FF14] w-5 h-5" />
    </motion.div>
  );

  return isLink ? (
    <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>
  ) : (
    <div onClick={onClick}>{content}</div>
  );
};

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: <SkillCard />
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div>
        <CardItem text="SDN 5 Sidorejo" icon={BookOpenIcon} href="/sd" />
        <CardItem text="SMPN 1 Sidomulyo" icon={BookOpenIcon} href="https://www.smpn1sdm.sch.id/" />
        <CardItem text="MAN 1 Bandar Lampung" icon={GraduationCapIcon} href="https://www.ppdb.man1balam.sch.id/home" />
        <CardItem text="University of Lampung" icon={GraduationCapIcon} href="https://www.unila.ac.id/" />
      </div>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div>
        <CardItem text="SoloLearn" icon={AwardIcon} />
        <CardItem text="Microsoft" icon={AwardIcon} />
        <CardItem text="Google Cloud" icon={AwardIcon} />
      </div>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  const currentTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section id="about" className='text-white pt-18'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/about-image.jpg" width={500} height={500} alt='Image of the Author' className='rounded-2xl' />
        <div>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            I’m an active Computer Science student at the University of Lampung, with a strong interest in web development and machine learning. Beyond the world of code, I’m also passionate about photography and filmmaking. That means I'm not only a tech person, but also a creative one — always ready to carry a camera, capture the beauty of the world, and share it with others through the internet, all with a touch of computing magic.
          </p>

          {/* Tab Buttons */}
          <div className='flex flex-row mt-8 gap-4 border-b border-[#39FF14]/40 pb-2'>
            {TAB_DATA.map((t) => (
              <TabButton
                key={t.id}
                selectTab={() => handleTabChange(t.id)}
                active={tab === t.id}
              >
                {t.title}
              </TabButton>
            ))}
          </div>

          {/* Tab Content with Animation */}
          <div className="relative mt-8">
  <AnimatePresence mode="wait">
    <motion.div
      key={tab}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="relative w-full"
    >
      {currentTab?.content}
    </motion.div>
  </AnimatePresence>
</div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection

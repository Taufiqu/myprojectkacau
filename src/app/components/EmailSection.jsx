'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { GithubIcon, LinkedinIcon, InstagramIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import GradientCircle from './GradientCircle'

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      const resData = await response.json()

      if (resData.status === 'success') {
        setEmailSubmitted(true)
        e.target.reset() // Clear form
      } else {
        console.error('Failed to send:', resData.error)
      }

    } catch (error) {
      console.error("Error sending message:", error)
    }
  }

  return (
    <section id="contact" className="relative grid md:grid-cols-2 gap-4 my-12 py-24 px-4 xl:px-16">
      {/* Decorative Background Circle */}
      <GradientCircle position="left" />

      {/* Text and Socials */}
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          You can contact me if you have anything interesting to share.
        </p>
        <div className="flex flex-row gap-4">
          <Link href="https://github.com/Taufiqu" target="_blank">
            <GithubIcon className="text-white w-6 h-6 hover:text-[#39FF14] transition-colors duration-300" />
          </Link>
          <Link href="https://linkedin.com/in/muhammad-hafizh-taufiqurrohman-421121290" target="_blank">
            <LinkedinIcon className="text-white w-6 h-6 hover:text-[#39FF14] transition-colors duration-300" />
          </Link>
          <Link href="https://www.instagram.com/hafizh_tr/" target="_blank">
            <InstagramIcon className="text-white w-6 h-6 hover:text-[#39FF14] transition-colors duration-300" />
          </Link>
        </div>
      </div>

      {/* Contact Form */}
      <div className="z-10">
        <form onSubmit={handleSubmit} className="flex flex-col">
          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="jacob@gmail.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm text-gray-100 rounded-lg block w-full p-3"
            />
          </div>

          {/* Subject Field */}
          <div className="mb-6">
            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="Just saying hi"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm text-gray-100 rounded-lg block w-full p-3"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Let's talk about..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm text-gray-100 rounded-lg block w-full p-3 resize-none"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03, boxShadow: '0 0 15px #39FF14' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-[#39FF14] hover:bg-green-500 text-black font-semibold py-2.5 px-5 rounded-lg w-full transition-colors duration-300"
          >
            Send Message
          </motion.button>

          {/* Feedback */}
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default EmailSection

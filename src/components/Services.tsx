'use-client'
import React from 'react'
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

function Services() {

    const content = [
        {
          title: "Editing",
          description: 'I craft compelling video introductions with expert assembly cuts, B-roll, and stock footage sourcing. By piecing together raw footage into a cohesive sequence and sourcing high-quality supplementary content, I ensure your video is engaging and professional.',
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Editing
            </div>
          ),
        },
        {
          title: "Color",
          description:
            "Enhance your video’s visual quality with expert color correction. I offer technical and creative grading for normal footage and full grading of LOG/RAW footage, ensuring perfect exposure, contrast, and color balance. Transform your raw visuals into a vibrant, cinematic experience.",
          content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                Color
            </div>
          ),
        },
        {
          title: "VFX",
          description:
            "Bring your videos to life with stunning VFX. I specialize in text animation, motion graphics, and advanced techniques like comping, keying, and rotoscoping, ensuring your visuals are dynamic and captivating.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
              VFX
            </div>
          ),
        },
        {
          title: "Sound",
          description:
            "Elevate your videos with expert sound design. I specialize in sound effects placement, custom sound design, and precise music sourcing and editing, ensuring your audio enhances the narrative and engages your audience effectively.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              Sound
            </div>
          ),
        },
      ];

  return (
    <>
    <div className='text-center m-10  '>
         <h2 className="text-7xl text-teal-600 font-semibold tracking-wide uppercase">What I Offer!</h2>
    </div>
    <div>
        <StickyScroll content={content} />
    </div>
    </>
  )
}

export default Services
"use client"
import Link from "next/link";
import { Button } from "./ui/button";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//import required modules
import {Pagination} from 'swiper/modules';

//components
import ProjectCard from '@/components/ProjectCard'

const projectData = [
{
    image: '/work/amazon-clone-SC.png',
    category: 'HTML-CSS',
    name: 'Amazon Clone',
    description: 'Amazon Clone built by using Hyper Text Markup Language (HTML) & Cascading Style Sheet (CSS).',
    link:'https://amazon-clone-html-css-haiders-projects-32165b2f.vercel.app/',
    github: '/'
},
{
  image: '/work/portfolio-website-SC.png',
  category: 'Next js',
  name: 'Portfolio Website',
  description: 'Portfolio Website built with Next.js framework & TailwindCSS and Framer-Motion.',
  link:'https://portfolio-website-next-js-haiders-projects-32165b2f.vercel.app/',
  github: '/'
},
{
  image: '/work/calculator-SC.png',
  category: 'HTML-CSS-JS',
  name: 'Calculator',
  description: 'Calculator built by using Hyper Text Markup Language, Cascading Style Sheet & Javascript.',
  link:'https://calculator-khaki-alpha.vercel.app/',
  github: '/'
},
{
  image: '/work/tic-tac-toe-SC.png',
  category: 'HTML-CSS-JS',
  name: 'Tic Tac Toe',
  description: 'Tic Tac Toe Game built by using Hyper Text Markup Language, Cascading Style Sheet & Javascript.',
  link:'https://tic-tac-toe-html-css-js-xi.vercel.app/',
  github: '/'
},
{
  image: '/work/rock-paper-scissor-SC.png',
  category: 'HTML-CSS-JS',
  name: 'Rock Paper Scissor',
  description: 'Rock Paper Scissor Game built by using HTML, Cascading Style Sheet & Javascript.',
  link:'https://rock-paper-scissor-html-css-js.vercel.app/',
  github: '/'
},
{
  image: '/work/countdown-timer-SC.png',
  category: 'Next js',
  name: 'Countdown Timer',
  description: 'Countdown Timer built with Next.js framework & TailwindCSS.',
  link:'https://countdown-timer-next-js-sand.vercel.app/',
  github: '/'
},
{
  image: '/work/weather-widget-SC.png',
  category: 'Next js',
  name: 'Weather Widget',
  description: 'Weather Widget built with Next.js framework & TailwindCSS.',
  link:'https://weather-app-next-js-iota.vercel.app/',
  github: '/'
},
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4 text-violet-800">Latest Projects</h2>
          <p className="subtitle mb-8">Here are my all latest projects that I have build.</p>
          <Link href='/projects'>
          <Button className="font-thin">See All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 ">
           <Swiper className="h-[480px]" slidesPerView={1} breakpoints={{
            640: {
              slidesPerView: 2
            }
           }} 
           spaceBetween={30} 
           modules={[Pagination]} 
           pagination={{clickable:true}}
           >
            {/* show only first 4 projects on the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work
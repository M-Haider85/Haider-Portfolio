'use client'
import React, {useState} from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
      image: '/work/amazon-clone-SC.png',
      category: 'HTML-CSS',
      name: 'Amazon Clone',
      description: 'Amazon Clone built by using Hyper Text Markup Language (HTML) & Cascading Style Sheet (CSS).',
      link:'/',
      github: '/'
  },
  {
    image: '/work/portfolio-website-SC.png',
    category: 'Next js',
    name: 'Portfolio Website',
    description: 'Portfolio Website built with Next.js framework & TailwindCSS and Framer-Motion.',
    link:'/',
    github: '/'
  },
  {
    image: '/work/calculator-SC.png',
    category: 'HTML-CSS-JS',
    name: 'Calculator',
    description: 'Calculator built by using Hyper Text Markup Language, Cascading Style Sheet & Javascript.',
    link:'/',
    github: '/'
  },
  {
    image: '/work/tic-tac-toe-SC.png',
    category: 'HTML-CSS-JS',
    name: 'Tic Tac Toe',
    description: 'Tic Tac Toe Game built by using Hyper Text Markup Language, Cascading Style Sheet & Javascript.',
    link:'/',
    github: '/'
  },
  {
    image: '/work/rock-paper-scissor-SC.png',
    category: 'HTML-CSS-JS',
    name: 'Rock Paper Scissor',
    description: 'Rock Paper Scissor Game built by using HTML, Cascading Style Sheet & Javascript.',
    link:'/',
    github: '/'
  },
  {
    image: '/work/countdown-timer-SC.png',
    category: 'Next js',
    name: 'Countdown Timer',
    description: 'Countdown Timer built with Next.js framework & TailwindCSS.',
    link:'/',
    github: '/'
  },
  {
    image: '/work/weather-widget-SC.png',
    category: 'Next js',
    name: 'Weather Widget',
    description: 'Weather Widget built with Next.js framework & TailwindCSS.',
    link:'/',
    github: '/'
  },
  ];

// remove category duplicates
const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
]


  const Projects = () => {
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState('all projects');

    const filteredProjects = projectData.filter((project) => {
      //if category is "all projects" return all projects, else filter by category
      return category === 'all projects' ? project : project.category === category;
    });

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto text-violet-800'>
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto 
          md:border dark:border-none'>
            {categories.map((category,index) => {
              return  (
              <TabsTrigger 
              onClick={() => setCategory(category)}
              value={category} 
              key={index}
              className='capitalize w-[162px] md:w-auto'
              >
                {category}
                </TabsTrigger>
                )
            })}
          </TabsList>
          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project,index) => {
              return(
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              )
            })}
          </div>

        </Tabs>
      </div>
    </section>
  )
}

export default Projects
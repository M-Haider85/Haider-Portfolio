'use client';

import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//import required modules
import {Pagination} from 'swiper/modules';

const reviewsData = [
  {
    avatar: '/reviews/avatar-1.png',
    name: 'Justin Ferguson',
    job: 'Real Estate Developer',
    review: 'I really loved his works, he is such a professional and disciplined guy.'
  },
  {
    avatar: '/reviews/avatar-2.png',
    name: 'Kendra Anderson',
    job: 'Interior Designer',
    review: 'Great quality work. Highly recommended.'
  },
  {
    avatar: '/reviews/avatar-3.png',
    name: 'Harry Jones',
    job: 'Lawyer',
    review: 'Good service. I would love to work again with Haider Asghar.'
  },
  {
    avatar: '/reviews/avatar-4.png',
    name: 'Britney Smith',
    job: 'Graphic Designer',
    review: 'I have hired Haider Asghar for my website. I have had nothing but good experince working with him.'
  },
  {
    avatar: '/reviews/avatar-5.png',
    name: 'Thomas Chandler',
    job: 'Engineer',
    review: 'Haider is very professional, responsive and knowledgeable. He is very prompt with his responses to any questions I have.'
  },
  {
    avatar: '/reviews/avatar-6.png',
    name: 'Michael Joe',
    job: 'Dentist',
    review: 'I am very pleased with the results thus far & I look forward to continue working with Haider Asghar.'
  },
]

export default function Reviews() {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto text-violet-800">Reviews</h2>
        {/* slider */}
        <Swiper 
        slidesPerView={1}
        breakpoints={{
          640: {slidesPerView:2},
          1400: {slidesPerView:3}
        }}
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{
          clickable:true
        }}
        className="h-[350px]"
        >
          {reviewsData.map((person,index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px] border-violet-500">
                <CardHeader className="p-0 mb-10">
                <div className="flex items-center gap-x-4">
                {/* image */}
                <Image 
                src={person.avatar}
                width={70}
                height={70}
                alt=""
                priority
                />
                {/* name */}
                <div className="flex flex-col">
                  <CardTitle>{person.name}</CardTitle>
                  <p>{person.job}</p>
                </div>
                </div>  
                </CardHeader>
                <CardDescription className="text-lg text-muted-foreground">{person.review}</CardDescription>
                </Card>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}
